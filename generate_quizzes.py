import re
import random
import json
import os
import html
from collections import Counter

# 1. Read and parse vkq.html
with open('vkq.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

questions = []
current_q = None

for idx, line in enumerate(lines):
    stripped = line.strip()
    if not stripped:
        continue
    if re.match(r'^Câu\s+\d+\.', stripped):
        if current_q:
            questions.append(current_q)
        current_q = {'title_raw': stripped, 'options': [], 'orig_id': len(questions) + 1}
    elif re.match(r'^\*?[A-D]\.', stripped):
        if current_q is not None:
            current_q['options'].append(stripped)
    else:
        # Continuation line
        if current_q is not None:
            if current_q['options']:
                current_q['options'][-1] += ' ' + stripped
            else:
                current_q['title_raw'] += ' ' + stripped

if current_q:
    questions.append(current_q)

print(f'Parsed {len(questions)} questions from vkq.html')

def clean_title(title):
    text = title.split('.', 1)[1].strip()
    if text.startswith('[!b:$'):
        text = text[5:].strip()
    elif text.startswith('[!b:'):
        text = text[4:].strip()
    elif text.startswith('['):
        text = text[1:].strip()
        
    if text.endswith(':$]'):
        text = text[:-3] + ':'
    elif text.endswith('?$]'):
        text = text[:-3] + '?'
    elif text.endswith('$]'):
        text = text[:-2]
    elif text.endswith(']'):
        text = text[:-1]
    return text.strip()

for q in questions:
    m = re.match(r'^Câu\s+\d+\.(.*)$', q['title_raw'])
    q['title_body'] = m.group(1)
    q['clean_text'] = html.unescape(clean_title(q['title_raw']))
    
    opt_texts = []
    for opt in q['options']:
        cleaned = re.sub(r'^\*?[A-D]\.\s*', '', opt).strip()
        opt_texts.append(cleaned)
    # Original correct text is option A
    q['correct_text'] = opt_texts[0]
    q['distractors'] = opt_texts[1:]

# Seed for deterministic and balanced random generation
random.seed(2026)

all_indices = list(range(200))
random.shuffle(all_indices)

test_indices = []
for i in range(6):
    test_indices.append(all_indices[i*30:(i+1)*30])

remaining = all_indices[180:]
extra_10 = random.sample(all_indices[:180], 10)
test_7 = remaining + extra_10
random.shuffle(test_7)
test_indices.append(test_7)

letters = ['A', 'B', 'C', 'D']
tests_data = []

# Generate 7 test files (de_1.html to de_7.html)
for t_idx, t_q_indices in enumerate(test_indices):
    test_num = t_idx + 1
    # Balanced positions: [7, 7, 8, 8] shuffled
    counts = [7, 7, 8, 8]
    random.shuffle(counts)
    pos_pool = [0]*counts[0] + [1]*counts[1] + [2]*counts[2] + [3]*counts[3]
    random.shuffle(pos_pool)
    
    test_questions = []
    test_file_lines = []
    
    for q_idx_in_test, orig_idx in enumerate(t_q_indices):
        q = questions[orig_idx]
        new_q_num = q_idx_in_test + 1
        new_title = f'Câu {new_q_num}.{q["title_body"]}'
        
        target_pos = pos_pool[q_idx_in_test]
        dist = q['distractors'].copy()
        random.shuffle(dist)
        
        choices = []
        d_idx = 0
        for pos in range(4):
            if pos == target_pos:
                choices.append((q['correct_text'], True))
            else:
                choices.append((dist[d_idx], False))
                d_idx += 1
                
        opt_lines = []
        clean_choices = []
        for pos, (text, is_correct) in enumerate(choices):
            let = letters[pos]
            clean_choices.append({'letter': let, 'text': html.unescape(text)})
            if is_correct:
                opt_lines.append(f'*{let}. {text}')
            else:
                opt_lines.append(f'{let}. {text}')
                
        test_file_lines.append(new_title)
        test_file_lines.extend(opt_lines)
        
        test_questions.append({
            'q_num': new_q_num,
            'orig_id': q['orig_id'],
            'title_raw': new_title,
            'clean_text': q['clean_text'],
            'options_raw': opt_lines,
            'choices': clean_choices,
            'correct_letter': letters[target_pos],
            'correct_text': html.unescape(q['correct_text'])
        })
        
    filename = f'de_{test_num}.html'
    with open(filename, 'w', encoding='utf-8') as out_f:
        out_f.write('\n'.join(test_file_lines) + '\n')
    print(f'Wrote {filename} (30 questions, {len(test_file_lines)} lines)')
    
    tests_data.append({
        'test_num': test_num,
        'title': f'Đề trắc nghiệm số {test_num}',
        'questions': test_questions
    })

# Write dap_an_7_de.txt
with open('dap_an_7_de.txt', 'w', encoding='utf-8') as f_ans:
    f_ans.write('='*70 + '\n')
    f_ans.write('BẢNG ĐÁP ÁN 7 ĐỀ QUIZ (MỖI ĐỀ 30 CÂU)\n')
    f_ans.write('Nguồn câu hỏi: vkq.html\n')
    f_ans.write('Đã xáo trộn vị trí đáp án đúng ngẫu nhiên & phân bổ đều (A, B, C, D)\n')
    f_ans.write('='*70 + '\n\n')
    
    for t in tests_data:
        f_ans.write(f'=== ĐỀ SỐ {t["test_num"]} ===\n')
        c = Counter([q['correct_letter'] for q in t['questions']])
        f_ans.write(f'Phân bổ: A={c["A"]}, B={c["B"]}, C={c["C"]}, D={c["D"]}\n')
        ans_list = [f"{q['q_num']:02d}. {q['correct_letter']}" for q in t['questions']]
        for i in range(0, 30, 5):
            f_ans.write('   '.join(ans_list[i:i+5]) + '\n')
        f_ans.write('\n')

# Write dap_an_7_de.md
with open('dap_an_7_de.md', 'w', encoding='utf-8') as f_md:
    f_md.write('# Bảng Đáp Án 7 Đề Quiz (Trộn Đáp Án)\n\n')
    f_md.write('Được tạo từ ngân hàng 200 câu hỏi trong [vkq.html](file:///Users/baonguyenn/SourceCode/Demos/quiz/vkq/vkq.html). Mỗi đề gồm 30 câu hỏi, đáp án đúng đã được xáo trộn đều giữa A, B, C, D (không còn mặc định là A).\n\n')
    f_md.write('## Tóm tắt phân bổ đáp án đúng:\n\n')
    f_md.write('| Đề thi | A | B | C | D | Tổng số câu |\n')
    f_md.write('|:---:|:---:|:---:|:---:|:---:|:---:|\n')
    for t in tests_data:
        c = Counter([q['correct_letter'] for q in t['questions']])
        f_md.write(f"| Đề {t['test_num']} | {c['A']} | {c['B']} | {c['C']} | {c['D']} | {len(t['questions'])} |\n")
    f_md.write('\n---\n\n')
    
    for t in tests_data:
        f_md.write(f'## Đề số {t["test_num"]}\n\n')
        f_md.write('| Câu | Đáp án | Câu gốc trong vkq.html | Tóm tắt câu hỏi |\n')
        f_md.write('|:---:|:---:|:---:|:---|\n')
        for q in t['questions']:
            short_q = q['clean_text'][:65] + ('...' if len(q['clean_text']) > 65 else '')
            f_md.write(f"| {q['q_num']} | **{q['correct_letter']}** | Câu {q['orig_id']} | {short_q} |\n")
        f_md.write('\n')

# Write quiz_data.js
with open('quiz_data.js', 'w', encoding='utf-8') as f_js:
    f_js.write('const QUIZ_DATA = ' + json.dumps(tests_data, ensure_ascii=False, indent=2) + ';\n')

print('All 7 test files, dap_an_7_de.txt, dap_an_7_de.md, and quiz_data.js written successfully!')
