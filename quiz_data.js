const QUIZ_DATA = [
  {
    "test_num": 1,
    "title": "Đề trắc nghiệm số 1",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 193,
        "title_raw": "Câu 1.[!b:$ Quy luật giá trị là?$]",
        "clean_text": "Quy luật giá trị là?",
        "options_raw": [
          "A. Quy luật riêng của CNTB",
          "B. Quy luật kinh tế chung của mọi xã hội",
          "*C. Quy luật cơ bản của sản xuất và trao đổi hàng hoá",
          "D. Quy luật kinh tế của thời kỳ quá độ lên CNXH"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật riêng của CNTB"
          },
          {
            "letter": "B",
            "text": "Quy luật kinh tế chung của mọi xã hội"
          },
          {
            "letter": "C",
            "text": "Quy luật cơ bản của sản xuất và trao đổi hàng hoá"
          },
          {
            "letter": "D",
            "text": "Quy luật kinh tế của thời kỳ quá độ lên CNXH"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Quy luật cơ bản của sản xuất và trao đổi hàng hoá"
      },
      {
        "q_num": 2,
        "orig_id": 12,
        "title_raw": "Câu 2.[!b:$ Chọn câu trả lời chính xác nhất về CNTB ngày nay; CNTB ngày nay là:$]",
        "clean_text": "Chọn câu trả lời chính xác nhất về CNTB ngày nay; CNTB ngày nay là:",
        "options_raw": [
          "*A. Giai đoạn ngày nay của CNTB độc quyền",
          "B. CNTB độc quyền nhà nước",
          "C. CNTB hiện đại",
          "D. CNTB độc quyền"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giai đoạn ngày nay của CNTB độc quyền"
          },
          {
            "letter": "B",
            "text": "CNTB độc quyền nhà nước"
          },
          {
            "letter": "C",
            "text": "CNTB hiện đại"
          },
          {
            "letter": "D",
            "text": "CNTB độc quyền"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Giai đoạn ngày nay của CNTB độc quyền"
      },
      {
        "q_num": 3,
        "orig_id": 28,
        "title_raw": "Câu 3.[!b:$ Khi tăng NSLĐ, cơ cấu giá trị một hàng hoá thay đổi. Trường hợp nào dưới đây không đúng?$]",
        "clean_text": "Khi tăng NSLĐ, cơ cấu giá trị một hàng hoá thay đổi. Trường hợp nào dưới đây không đúng?",
        "options_raw": [
          "A. (c+ v+ m) giảm",
          "B. C có thể giữ nguyên, có thể tăng, có thể giảm",
          "*C. (c + v + m) không đổi",
          "D. (v+ m) giảm"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "(c+ v+ m) giảm"
          },
          {
            "letter": "B",
            "text": "C có thể giữ nguyên, có thể tăng, có thể giảm"
          },
          {
            "letter": "C",
            "text": "(c + v + m) không đổi"
          },
          {
            "letter": "D",
            "text": "(v+ m) giảm"
          }
        ],
        "correct_letter": "C",
        "correct_text": "(c + v + m) không đổi"
      },
      {
        "q_num": 4,
        "orig_id": 156,
        "title_raw": "Câu 4.[!b:$ Các tổ chức độc quyền sử dụng loại giá cả nào?$]",
        "clean_text": "Các tổ chức độc quyền sử dụng loại giá cả nào?",
        "options_raw": [
          "A. Tất cả phương án",
          "B. Giá cả thấp",
          "C. Giá cả chính trị",
          "*D. Giá cả độc quyền cao"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả phương án"
          },
          {
            "letter": "B",
            "text": "Giá cả thấp"
          },
          {
            "letter": "C",
            "text": "Giá cả chính trị"
          },
          {
            "letter": "D",
            "text": "Giá cả độc quyền cao"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Giá cả độc quyền cao"
      },
      {
        "q_num": 5,
        "orig_id": 42,
        "title_raw": "Câu 5.[!b:$ Tiêu chí nào là cơ bản để xác định chính xác tiền công?$]",
        "clean_text": "Tiêu chí nào là cơ bản để xác định chính xác tiền công?",
        "options_raw": [
          "A. Tiền công tháng",
          "B. Tiền công ngày",
          "C. Số lượng tiền công",
          "*D. Tiền công giờ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tiền công tháng"
          },
          {
            "letter": "B",
            "text": "Tiền công ngày"
          },
          {
            "letter": "C",
            "text": "Số lượng tiền công"
          },
          {
            "letter": "D",
            "text": "Tiền công giờ"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tiền công giờ"
      },
      {
        "q_num": 6,
        "orig_id": 46,
        "title_raw": "Câu 6.[!b:$ Việc mua bán nô lệ và mua bán sức lao động quan hệ với nhau thế nào?$]",
        "clean_text": "Việc mua bán nô lệ và mua bán sức lao động quan hệ với nhau thế nào?",
        "options_raw": [
          "*A. Hoàn toàn khác nhau",
          "B. Giống nhau về hình thức, khác nhau về bản chất",
          "C. Có quan hệ với nhau",
          "D. Giống nhau về bản chất, chỉ khác về hình thức"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hoàn toàn khác nhau"
          },
          {
            "letter": "B",
            "text": "Giống nhau về hình thức, khác nhau về bản chất"
          },
          {
            "letter": "C",
            "text": "Có quan hệ với nhau"
          },
          {
            "letter": "D",
            "text": "Giống nhau về bản chất, chỉ khác về hình thức"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Hoàn toàn khác nhau"
      },
      {
        "q_num": 7,
        "orig_id": 136,
        "title_raw": "Câu 7.[!b:$ Lượng giá trị của đơn vị hàng hoá thay đổi như thế nào?$]",
        "clean_text": "Lượng giá trị của đơn vị hàng hoá thay đổi như thế nào?",
        "options_raw": [
          "*A. Tỷ lệ nghịch với thời gian lao động xã hội cần thiết đồng thời tỷ lệ ngịch với năng suất lao động",
          "B. Tỷ lệ thuận với cường độ lao động và năng suất lao động",
          "C. Tỷ lệ nghịch với cường độ lao động và năng suất lao động",
          "D. Tỷ lệ thuận với thời gian lao động xã hội cần thiết, tỷ lệ nghịch với năng suất lao động"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tỷ lệ nghịch với thời gian lao động xã hội cần thiết đồng thời tỷ lệ ngịch với năng suất lao động"
          },
          {
            "letter": "B",
            "text": "Tỷ lệ thuận với cường độ lao động và năng suất lao động"
          },
          {
            "letter": "C",
            "text": "Tỷ lệ nghịch với cường độ lao động và năng suất lao động"
          },
          {
            "letter": "D",
            "text": "Tỷ lệ thuận với thời gian lao động xã hội cần thiết, tỷ lệ nghịch với năng suất lao động"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tỷ lệ nghịch với thời gian lao động xã hội cần thiết đồng thời tỷ lệ ngịch với năng suất lao động"
      },
      {
        "q_num": 8,
        "orig_id": 11,
        "title_raw": "Câu 8.[!b:$ Hình thức độc quyền nào mới có trong CNTB ngày nay?$]",
        "clean_text": "Hình thức độc quyền nào mới có trong CNTB ngày nay?",
        "options_raw": [
          "A. Conglomeret",
          "*B. Conglomeret và con sơn",
          "C. Công -xoóc-xi-om, con sơn",
          "D. Công -xoóc-xi-om"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Conglomeret"
          },
          {
            "letter": "B",
            "text": "Conglomeret và con sơn"
          },
          {
            "letter": "C",
            "text": "Công -xoóc-xi-om, con sơn"
          },
          {
            "letter": "D",
            "text": "Công -xoóc-xi-om"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Conglomeret và con sơn"
      },
      {
        "q_num": 9,
        "orig_id": 96,
        "title_raw": "Câu 9.[!b:$ Về kinh tế, xuất khẩu tư bản nhà nước nhằm mục đích?$]",
        "clean_text": "Về kinh tế, xuất khẩu tư bản nhà nước nhằm mục đích?",
        "options_raw": [
          "*A. Tạo môi trường thuận lợi cho hoạt động xuất khẩu tư bản tư nhân",
          "B. Khống chế kinh tế các nước nhập khẩu tư bản",
          "C. Tạo điều kiện cho các nước nhập khẩu tư bản phát triển",
          "D. Thu nhiều lợi nhuận"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tạo môi trường thuận lợi cho hoạt động xuất khẩu tư bản tư nhân"
          },
          {
            "letter": "B",
            "text": "Khống chế kinh tế các nước nhập khẩu tư bản"
          },
          {
            "letter": "C",
            "text": "Tạo điều kiện cho các nước nhập khẩu tư bản phát triển"
          },
          {
            "letter": "D",
            "text": "Thu nhiều lợi nhuận"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tạo môi trường thuận lợi cho hoạt động xuất khẩu tư bản tư nhân"
      },
      {
        "q_num": 10,
        "orig_id": 101,
        "title_raw": "Câu 10.[!b:$ Những nhận xét dưới đây về phương pháp sản xuất giá trị thặng dư tuyệt đối, nhận xét nào là không đúng$]",
        "clean_text": "Những nhận xét dưới đây về phương pháp sản xuất giá trị thặng dư tuyệt đối, nhận xét nào là không đúng",
        "options_raw": [
          "A. Thời gian lao động thặng dư thay đổi",
          "*B. Ngày lao động không thay đổi",
          "C. Chủ yếu áp dụng ở giai đoạn đầu của CNTB khi kỹ thuật còn thủ công lạc hậu",
          "D. Giá trị sức lao động không thay đổi"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Thời gian lao động thặng dư thay đổi"
          },
          {
            "letter": "B",
            "text": "Ngày lao động không thay đổi"
          },
          {
            "letter": "C",
            "text": "Chủ yếu áp dụng ở giai đoạn đầu của CNTB khi kỹ thuật còn thủ công lạc hậu"
          },
          {
            "letter": "D",
            "text": "Giá trị sức lao động không thay đổi"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Ngày lao động không thay đổi"
      },
      {
        "q_num": 11,
        "orig_id": 85,
        "title_raw": "Câu 11.[!b:$ Trong giai đoạn CNTB độc quyền quy luật giá trị có biểu hiện mới thành:$]",
        "clean_text": "Trong giai đoạn CNTB độc quyền quy luật giá trị có biểu hiện mới thành:",
        "options_raw": [
          "*A. Quy luật giá cả độc quyền cao",
          "B. Quy luật lợi nhuận độc quyền cao",
          "C. Quy luật giá cả sản xuất",
          "D. Quy luật lợi nhuận bình quân cho các nhà tư bản"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật giá cả độc quyền cao"
          },
          {
            "letter": "B",
            "text": "Quy luật lợi nhuận độc quyền cao"
          },
          {
            "letter": "C",
            "text": "Quy luật giá cả sản xuất"
          },
          {
            "letter": "D",
            "text": "Quy luật lợi nhuận bình quân cho các nhà tư bản"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Quy luật giá cả độc quyền cao"
      },
      {
        "q_num": 12,
        "orig_id": 4,
        "title_raw": "Câu 12.[!b:$ Nguồn vốn nào dưới đây mà ta có nghĩa vụ phải trả?$]",
        "clean_text": "Nguồn vốn nào dưới đây mà ta có nghĩa vụ phải trả?",
        "options_raw": [
          "A. FDI",
          "B. Cả FDI và ODA",
          "C. Vốn liên doanh của nước ngoài",
          "*D. ODA"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "FDI"
          },
          {
            "letter": "B",
            "text": "Cả FDI và ODA"
          },
          {
            "letter": "C",
            "text": "Vốn liên doanh của nước ngoài"
          },
          {
            "letter": "D",
            "text": "ODA"
          }
        ],
        "correct_letter": "D",
        "correct_text": "ODA"
      },
      {
        "q_num": 13,
        "orig_id": 36,
        "title_raw": "Câu 13.[!b:$ Những ý kiến nào dưới đây là sai?$]",
        "clean_text": "Những ý kiến nào dưới đây là sai?",
        "options_raw": [
          "A. Nguồn gốc của tích luỹ tư bản là giá trị thặng dư",
          "*B. Tích luỹ cơ bản là sự tiết kiệm tư bản",
          "C. Động cơ của tích lỹ tư bản cũng là giá trị thặng dư",
          "D. Tích luỹ tư bản là biến một phần giá trị thặng dư thành tư bản"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguồn gốc của tích luỹ tư bản là giá trị thặng dư"
          },
          {
            "letter": "B",
            "text": "Tích luỹ cơ bản là sự tiết kiệm tư bản"
          },
          {
            "letter": "C",
            "text": "Động cơ của tích lỹ tư bản cũng là giá trị thặng dư"
          },
          {
            "letter": "D",
            "text": "Tích luỹ tư bản là biến một phần giá trị thặng dư thành tư bản"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tích luỹ cơ bản là sự tiết kiệm tư bản"
      },
      {
        "q_num": 14,
        "orig_id": 25,
        "title_raw": "Câu 14.[!b:$ Trong phương pháp sản xuất giá trị thặng dư tuyệt đối, người lao động muốn giảm thời gian lao động trong ngày còn nhà tư bản lại muốn kéo dài thời gian lao động trong ngày. Giới hạn tối thiểu của ngày lao động là bao nhiêu?$]",
        "clean_text": "Trong phương pháp sản xuất giá trị thặng dư tuyệt đối, người lao động muốn giảm thời gian lao động trong ngày còn nhà tư bản lại muốn kéo dài thời gian lao động trong ngày. Giới hạn tối thiểu của ngày lao động là bao nhiêu?",
        "options_raw": [
          "A. Do nhà tư bản quy định",
          "B. Bằng thời gian lao động cần thiết",
          "C. Đủ bù đắp giá trị sức lao động của công nhân",
          "*D. Lớn hơn thời gian lao động cần thiết"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Do nhà tư bản quy định"
          },
          {
            "letter": "B",
            "text": "Bằng thời gian lao động cần thiết"
          },
          {
            "letter": "C",
            "text": "Đủ bù đắp giá trị sức lao động của công nhân"
          },
          {
            "letter": "D",
            "text": "Lớn hơn thời gian lao động cần thiết"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Lớn hơn thời gian lao động cần thiết"
      },
      {
        "q_num": 15,
        "orig_id": 163,
        "title_raw": "Câu 15.[!b:$ Đâu là nguyên nhân ra đời của CNTB độc quyền?$]",
        "clean_text": "Đâu là nguyên nhân ra đời của CNTB độc quyền?",
        "options_raw": [
          "A. Do cuộc đấu tranh của giai cấp công nhân và nhân dân lao động E. Do sự lớn mạnh của giai cấp tư sản",
          "B. Do sự can thiệp của nhà nước tư sản",
          "*C. Do sự tập trung sản xuất dưới tác động của cách mạng- khoa học -",
          "D. công nghệ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Do cuộc đấu tranh của giai cấp công nhân và nhân dân lao động E. Do sự lớn mạnh của giai cấp tư sản"
          },
          {
            "letter": "B",
            "text": "Do sự can thiệp của nhà nước tư sản"
          },
          {
            "letter": "C",
            "text": "Do sự tập trung sản xuất dưới tác động của cách mạng- khoa học -"
          },
          {
            "letter": "D",
            "text": "công nghệ"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Do sự tập trung sản xuất dưới tác động của cách mạng- khoa học -"
      },
      {
        "q_num": 16,
        "orig_id": 115,
        "title_raw": "Câu 16.[!b:$ Cặp phạm trù nào là phát hiện riêng của C.Mác?$]",
        "clean_text": "Cặp phạm trù nào là phát hiện riêng của C.Mác?",
        "options_raw": [
          "A. Lao động quá khứ; lao động sống",
          "*B. Lao động cụ thể và lao động trừu tượng",
          "C. Lao động tư nhân; lao động xã hội",
          "D. Lao động giản đơn; lao động phức tạp"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lao động quá khứ; lao động sống"
          },
          {
            "letter": "B",
            "text": "Lao động cụ thể và lao động trừu tượng"
          },
          {
            "letter": "C",
            "text": "Lao động tư nhân; lao động xã hội"
          },
          {
            "letter": "D",
            "text": "Lao động giản đơn; lao động phức tạp"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Lao động cụ thể và lao động trừu tượng"
      },
      {
        "q_num": 17,
        "orig_id": 185,
        "title_raw": "Câu 17.[!b:$ Sự hoạt động của quy luật giá trị được biểu hiện cụ thể như thế nào?$]",
        "clean_text": "Sự hoạt động của quy luật giá trị được biểu hiện cụ thể như thế nào?",
        "options_raw": [
          "A. Giá cả thị trường ngang bằng giá cả độc quyền",
          "B. Giá cả thị trường do người sản xuất quyết định",
          "*C. Giá cả thị trường xoay quanh giá trị xã hội của hàng hoá",
          "D. Giá cả thị trường ngang bằng giá cả sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giá cả thị trường ngang bằng giá cả độc quyền"
          },
          {
            "letter": "B",
            "text": "Giá cả thị trường do người sản xuất quyết định"
          },
          {
            "letter": "C",
            "text": "Giá cả thị trường xoay quanh giá trị xã hội của hàng hoá"
          },
          {
            "letter": "D",
            "text": "Giá cả thị trường ngang bằng giá cả sản xuất"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Giá cả thị trường xoay quanh giá trị xã hội của hàng hoá"
      },
      {
        "q_num": 18,
        "orig_id": 76,
        "title_raw": "Câu 18.[!b:$ Trong các luận điểm dưới đây, luận điểm nào không đúng:$]",
        "clean_text": "Trong các luận điểm dưới đây, luận điểm nào không đúng:",
        "options_raw": [
          "*A. CNH là tất yếu đối với mọi nước đi lên CNXH.",
          "B. CNH là tất yếu đối với các nước nghèo, kém phát triển",
          "C. CNH là tất yếu đối với mọi nước lạc hậu",
          "D. CNH là tất yếu đối với các nước chưa có nền sản xuất lớn, hiện đại."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "CNH là tất yếu đối với mọi nước đi lên CNXH."
          },
          {
            "letter": "B",
            "text": "CNH là tất yếu đối với các nước nghèo, kém phát triển"
          },
          {
            "letter": "C",
            "text": "CNH là tất yếu đối với mọi nước lạc hậu"
          },
          {
            "letter": "D",
            "text": "CNH là tất yếu đối với các nước chưa có nền sản xuất lớn, hiện đại."
          }
        ],
        "correct_letter": "A",
        "correct_text": "CNH là tất yếu đối với mọi nước đi lên CNXH."
      },
      {
        "q_num": 19,
        "orig_id": 177,
        "title_raw": "Câu 19.[!b:$ Tư bản bất biến (c) là:$]",
        "clean_text": "Tư bản bất biến (c) là:",
        "options_raw": [
          "A. Giá trị của nó không thay đổi và được chuyển ngay sang sản phẩm sau một chu kỳ sản xuất",
          "B. Giá trị của nó lớn lên trong quá trình sản xuất",
          "*C. Giá trị của nó không thay đổi về lượng và được chuyển nguyên vẹn sang sản phẩm",
          "D. Giá trị của nó chuyển dần vào sản phẩm qua khấu hao và được khấu hao một lần vào trong giá trị sản phẩm mới"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giá trị của nó không thay đổi và được chuyển ngay sang sản phẩm sau một chu kỳ sản xuất"
          },
          {
            "letter": "B",
            "text": "Giá trị của nó lớn lên trong quá trình sản xuất"
          },
          {
            "letter": "C",
            "text": "Giá trị của nó không thay đổi về lượng và được chuyển nguyên vẹn sang sản phẩm"
          },
          {
            "letter": "D",
            "text": "Giá trị của nó chuyển dần vào sản phẩm qua khấu hao và được khấu hao một lần vào trong giá trị sản phẩm mới"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Giá trị của nó không thay đổi về lượng và được chuyển nguyên vẹn sang sản phẩm"
      },
      {
        "q_num": 20,
        "orig_id": 188,
        "title_raw": "Câu 20.[!b:$ Lao động cụ thể là?$]",
        "clean_text": "Lao động cụ thể là?",
        "options_raw": [
          "A. Là lao động ở các ngành nghề cụ thể",
          "B. Là lao động có mục đích cụ thể",
          "*C. Là lao động ngành nghề, có mục đích riêng, đối tượng riêng, công cụ lao động riêng và kết quả riêng",
          "D. Là những việc làm cụ thể"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là lao động ở các ngành nghề cụ thể"
          },
          {
            "letter": "B",
            "text": "Là lao động có mục đích cụ thể"
          },
          {
            "letter": "C",
            "text": "Là lao động ngành nghề, có mục đích riêng, đối tượng riêng, công cụ lao động riêng và kết quả riêng"
          },
          {
            "letter": "D",
            "text": "Là những việc làm cụ thể"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Là lao động ngành nghề, có mục đích riêng, đối tượng riêng, công cụ lao động riêng và kết quả riêng"
      },
      {
        "q_num": 21,
        "orig_id": 79,
        "title_raw": "Câu 21.[!b:$ Tiến lên CNXH bỏ qua chế độ TBCN là bỏ qua:$]",
        "clean_text": "Tiến lên CNXH bỏ qua chế độ TBCN là bỏ qua:",
        "options_raw": [
          "A. Bỏ qua sự thống trị của QHSX TBCN",
          "*B. Tất cả các đáp án",
          "C. Bỏ qua sự thống trị của kiến trúc thượng tầng TBCN",
          "D. Bỏ qua tất cả cái gì có trong CNTB"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Bỏ qua sự thống trị của QHSX TBCN"
          },
          {
            "letter": "B",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "C",
            "text": "Bỏ qua sự thống trị của kiến trúc thượng tầng TBCN"
          },
          {
            "letter": "D",
            "text": "Bỏ qua tất cả cái gì có trong CNTB"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 22,
        "orig_id": 50,
        "title_raw": "Câu 22.[!b:$ Lưu thông hàng hoá dựa trên nguyên tắc ngang giá. Điều này được hiểu như thế nào là đúng?$]",
        "clean_text": "Lưu thông hàng hoá dựa trên nguyên tắc ngang giá. Điều này được hiểu như thế nào là đúng?",
        "options_raw": [
          "A. Tổng giá trị = Tổng giá cả",
          "*B. Giá cả có thể tách rời giá trị và xoay quanh giá trị của nó",
          "C. Giá cả của từng hàng hoá luôn luôn bằng giá trị của nó",
          "D. Mọi hàng hoá có giá cả bằng nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tổng giá trị = Tổng giá cả"
          },
          {
            "letter": "B",
            "text": "Giá cả có thể tách rời giá trị và xoay quanh giá trị của nó"
          },
          {
            "letter": "C",
            "text": "Giá cả của từng hàng hoá luôn luôn bằng giá trị của nó"
          },
          {
            "letter": "D",
            "text": "Mọi hàng hoá có giá cả bằng nhau"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Giá cả có thể tách rời giá trị và xoay quanh giá trị của nó"
      },
      {
        "q_num": 23,
        "orig_id": 22,
        "title_raw": "Câu 23.[!b:$ Cuối thế kỷ 19 đầu thế kỷ 20 các nước đế quốc có thuộc địa nhiều nhất xếp theo thứ tự nào là đúng?$]",
        "clean_text": "Cuối thế kỷ 19 đầu thế kỷ 20 các nước đế quốc có thuộc địa nhiều nhất xếp theo thứ tự nào là đúng?",
        "options_raw": [
          "A. Anh - Nga - Pháp - Mỹ",
          "*B. Anh - Pháp - Nga - Mỹ",
          "C. Nga - Anh - Mỹ - Pháp",
          "D. Pháp - Anh - Nga - Mỹ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Anh - Nga - Pháp - Mỹ"
          },
          {
            "letter": "B",
            "text": "Anh - Pháp - Nga - Mỹ"
          },
          {
            "letter": "C",
            "text": "Nga - Anh - Mỹ - Pháp"
          },
          {
            "letter": "D",
            "text": "Pháp - Anh - Nga - Mỹ"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Anh - Pháp - Nga - Mỹ"
      },
      {
        "q_num": 24,
        "orig_id": 14,
        "title_raw": "Câu 24.[!b:$ Trong thời kỳ CNTB độc quyền quan hệ giá trị và giá cả hàng hoá sẽ thế nào nếu xét toàn bộ hệ thống kinh tế TBCN?$]",
        "clean_text": "Trong thời kỳ CNTB độc quyền quan hệ giá trị và giá cả hàng hoá sẽ thế nào nếu xét toàn bộ hệ thống kinh tế TBCN?",
        "options_raw": [
          "A. Tổng giá cả không thống nhất với tổng giá trị",
          "B. Tổng giá cả &gt; tổng giá trị",
          "C. Tổng giá cả &lt; tổng giá trị",
          "*D. Tổng giá cả = tổng giá trị"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tổng giá cả không thống nhất với tổng giá trị"
          },
          {
            "letter": "B",
            "text": "Tổng giá cả > tổng giá trị"
          },
          {
            "letter": "C",
            "text": "Tổng giá cả < tổng giá trị"
          },
          {
            "letter": "D",
            "text": "Tổng giá cả = tổng giá trị"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tổng giá cả = tổng giá trị"
      },
      {
        "q_num": 25,
        "orig_id": 44,
        "title_raw": "Câu 25.[!b:$ Tư bản cố định và tư bản lưu động thuộc phạm trù tư bản nào?$]",
        "clean_text": "Tư bản cố định và tư bản lưu động thuộc phạm trù tư bản nào?",
        "options_raw": [
          "A. Tư bản ứng trước",
          "B. Tư bản tiền tệ",
          "*C. Tư bản sản xuất",
          "D. Tư bản bất biến"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tư bản ứng trước"
          },
          {
            "letter": "B",
            "text": "Tư bản tiền tệ"
          },
          {
            "letter": "C",
            "text": "Tư bản sản xuất"
          },
          {
            "letter": "D",
            "text": "Tư bản bất biến"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tư bản sản xuất"
      },
      {
        "q_num": 26,
        "orig_id": 39,
        "title_raw": "Câu 26.[!b:$ Từ định nghĩa phương pháp sản xuất giá trị thặng dư tuyệt đối hãy xác định phương án đúng dưới đây:$]",
        "clean_text": "Từ định nghĩa phương pháp sản xuất giá trị thặng dư tuyệt đối hãy xác định phương án đúng dưới đây:",
        "options_raw": [
          "*A. Độ dài ngày lao động lớn hơn thời gian lao động cần thiết",
          "B. Độ dài ngày lao động bằng ngày tự nhiên",
          "C. Độ dài ngày lao động bằng thời gian lao động cần thiết",
          "D. Độ dài ngày lao động lớn hơn không"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Độ dài ngày lao động lớn hơn thời gian lao động cần thiết"
          },
          {
            "letter": "B",
            "text": "Độ dài ngày lao động bằng ngày tự nhiên"
          },
          {
            "letter": "C",
            "text": "Độ dài ngày lao động bằng thời gian lao động cần thiết"
          },
          {
            "letter": "D",
            "text": "Độ dài ngày lao động lớn hơn không"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Độ dài ngày lao động lớn hơn thời gian lao động cần thiết"
      },
      {
        "q_num": 27,
        "orig_id": 17,
        "title_raw": "Câu 27.[!b:$ Xuất khẩu tư bản là đặc điểm của:$]",
        "clean_text": "Xuất khẩu tư bản là đặc điểm của:",
        "options_raw": [
          "*A. Của CNTB độc quyền",
          "B. Của CNTB",
          "C. Của CNTB tự do cạnh tranh",
          "D. Các nước giàu có"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Của CNTB độc quyền"
          },
          {
            "letter": "B",
            "text": "Của CNTB"
          },
          {
            "letter": "C",
            "text": "Của CNTB tự do cạnh tranh"
          },
          {
            "letter": "D",
            "text": "Các nước giàu có"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Của CNTB độc quyền"
      },
      {
        "q_num": 28,
        "orig_id": 45,
        "title_raw": "Câu 28.[!b:$ Tư bản bất biến (c) và tư bản khả biến (v) thuộc phạm trù tư bản nào?$]",
        "clean_text": "Tư bản bất biến (c) và tư bản khả biến (v) thuộc phạm trù tư bản nào?",
        "options_raw": [
          "A. Tư bản hàng hoá",
          "B. Tư bản lưu thông",
          "*C. Tư bản tiền tệ",
          "D. Tư bản sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tư bản hàng hoá"
          },
          {
            "letter": "B",
            "text": "Tư bản lưu thông"
          },
          {
            "letter": "C",
            "text": "Tư bản tiền tệ"
          },
          {
            "letter": "D",
            "text": "Tư bản sản xuất"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tư bản tiền tệ"
      },
      {
        "q_num": 29,
        "orig_id": 53,
        "title_raw": "Câu 29.[!b:$ Chọn các ý đúng trong các ý sau đây:$]",
        "clean_text": "Chọn các ý đúng trong các ý sau đây:",
        "options_raw": [
          "A. Lao động của người không qua đào tạo chỉ là lao động cụ thể",
          "B. Lao động của người kỹ sư có trình độ cao thuần tuý là lao động trừu E. tượng F. Tất cả các phương án đều đúng",
          "C. lao động trừu tượng",
          "*D. Lao động của mọi người sản xuất hàng hoá đều có lao động cụ thể và"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lao động của người không qua đào tạo chỉ là lao động cụ thể"
          },
          {
            "letter": "B",
            "text": "Lao động của người kỹ sư có trình độ cao thuần tuý là lao động trừu E. tượng F. Tất cả các phương án đều đúng"
          },
          {
            "letter": "C",
            "text": "lao động trừu tượng"
          },
          {
            "letter": "D",
            "text": "Lao động của mọi người sản xuất hàng hoá đều có lao động cụ thể và"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Lao động của mọi người sản xuất hàng hoá đều có lao động cụ thể và"
      },
      {
        "q_num": 30,
        "orig_id": 186,
        "title_raw": "Câu 30.[!b:$ Lao động cụ thể là:$]",
        "clean_text": "Lao động cụ thể là:",
        "options_raw": [
          "A. Biểu hiện tính chất xã hội của người sản xuất hàng hoá",
          "B. Là phạm trù lịch sử",
          "C. Lao động tạo ra giá trị của hàng hoá biểu hiện trên thị trường",
          "*D. Lao động tạo ra giá trị sử dụng của hàng hoá"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Biểu hiện tính chất xã hội của người sản xuất hàng hoá"
          },
          {
            "letter": "B",
            "text": "Là phạm trù lịch sử"
          },
          {
            "letter": "C",
            "text": "Lao động tạo ra giá trị của hàng hoá biểu hiện trên thị trường"
          },
          {
            "letter": "D",
            "text": "Lao động tạo ra giá trị sử dụng của hàng hoá"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Lao động tạo ra giá trị sử dụng của hàng hoá"
      }
    ]
  },
  {
    "test_num": 2,
    "title": "Đề trắc nghiệm số 2",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 112,
        "title_raw": "Câu 1.[!b:$ Cách diễn tả nào dưới đây sai?$]",
        "clean_text": "Cách diễn tả nào dưới đây sai?",
        "options_raw": [
          "A. Giá trị của sức lao động = v",
          "B. Giá trị mới của sản phẩm = v + m",
          "C. Giá trị của TLSX = c",
          "*D. Giá trị của một sản phẩm mới = v + m"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giá trị của sức lao động = v"
          },
          {
            "letter": "B",
            "text": "Giá trị mới của sản phẩm = v + m"
          },
          {
            "letter": "C",
            "text": "Giá trị của TLSX = c"
          },
          {
            "letter": "D",
            "text": "Giá trị của một sản phẩm mới = v + m"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Giá trị của một sản phẩm mới = v + m"
      },
      {
        "q_num": 2,
        "orig_id": 43,
        "title_raw": "Câu 2.[!b:$ Khi nào sức lao động trở thành hàng hoá một cách phổ biến?$]",
        "clean_text": "Khi nào sức lao động trở thành hàng hoá một cách phổ biến?",
        "options_raw": [
          "*A. Trong nền sản xuất hàng hoá TBCN",
          "B. Trong nền sản xuất hàng hoá giản đơn",
          "C. Trong nền sản xuất lớn hiện đại",
          "D. Trong xã hội chiếm hữu nô lệ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Trong nền sản xuất hàng hoá TBCN"
          },
          {
            "letter": "B",
            "text": "Trong nền sản xuất hàng hoá giản đơn"
          },
          {
            "letter": "C",
            "text": "Trong nền sản xuất lớn hiện đại"
          },
          {
            "letter": "D",
            "text": "Trong xã hội chiếm hữu nô lệ"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Trong nền sản xuất hàng hoá TBCN"
      },
      {
        "q_num": 3,
        "orig_id": 200,
        "title_raw": "Câu 3.[!b:$ Hoạt động nào của con người được coi là cơ bản nhất và là cơ sở của đời sống xã hội?$]",
        "clean_text": "Hoạt động nào của con người được coi là cơ bản nhất và là cơ sở của đời sống xã hội?",
        "options_raw": [
          "A. Hoạt động nghệ thuật, thể thao",
          "B. Hoạt động khoa học",
          "*C. Hoạt động sản xuất của cải vật chất",
          "D. Hoạt động chính trị"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hoạt động nghệ thuật, thể thao"
          },
          {
            "letter": "B",
            "text": "Hoạt động khoa học"
          },
          {
            "letter": "C",
            "text": "Hoạt động sản xuất của cải vật chất"
          },
          {
            "letter": "D",
            "text": "Hoạt động chính trị"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Hoạt động sản xuất của cải vật chất"
      },
      {
        "q_num": 4,
        "orig_id": 15,
        "title_raw": "Câu 4.[!b:$ Các cuộc xâm chiếm thuộc địa của các nước đế quốc diễn ra mạnh mẽ vào thời kỳ nào?$]",
        "clean_text": "Các cuộc xâm chiếm thuộc địa của các nước đế quốc diễn ra mạnh mẽ vào thời kỳ nào?",
        "options_raw": [
          "A. Thế kỷ 17",
          "*B. Cuối thế kỷ 18 - đầu thế kỷ 19",
          "C. Thế kỷ 18",
          "D. Cuối thế kỷ 19 - đầu thế kỷ 20"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Thế kỷ 17"
          },
          {
            "letter": "B",
            "text": "Cuối thế kỷ 18 - đầu thế kỷ 19"
          },
          {
            "letter": "C",
            "text": "Thế kỷ 18"
          },
          {
            "letter": "D",
            "text": "Cuối thế kỷ 19 - đầu thế kỷ 20"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Cuối thế kỷ 18 - đầu thế kỷ 19"
      },
      {
        "q_num": 5,
        "orig_id": 106,
        "title_raw": "Câu 5.[!b:$ Phương pháp sản xuất giá trị thặng dư tuyệt đối có những hạn chế. Chọn ý đúng trong các nhận xét dưới đây?$]",
        "clean_text": "Phương pháp sản xuất giá trị thặng dư tuyệt đối có những hạn chế. Chọn ý đúng trong các nhận xét dưới đây?",
        "options_raw": [
          "A. Không thoả mãn khát vọng giá trị thặng dư của nhà tư bản",
          "B. Gặp phải sự phản kháng quyết liệt của công nhân",
          "*C. Tất cả các đáp án",
          "D. Năng suất lao động không thay đổi"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Không thoả mãn khát vọng giá trị thặng dư của nhà tư bản"
          },
          {
            "letter": "B",
            "text": "Gặp phải sự phản kháng quyết liệt của công nhân"
          },
          {
            "letter": "C",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "D",
            "text": "Năng suất lao động không thay đổi"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 6,
        "orig_id": 32,
        "title_raw": "Câu 6.[!b:$ Tích tụ và tập trung tư bản khác nhau ở:$]",
        "clean_text": "Tích tụ và tập trung tư bản khác nhau ở:",
        "options_raw": [
          "*A. Tất cả các phương án",
          "B. mô tư bản xã hội.",
          "C. Tích tụ tư bản vừa làm tăng quy mô tư bản cá biệt vừa làm tăng quy",
          "D. Tập trung tư bản chỉ làm tăng quy mô tư bản cá biệt, không làm tăng E. quy mô tư bản xã hội. F. Nguồn gốc trực tiếp của tư bản tích tụ và tập trung."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "mô tư bản xã hội."
          },
          {
            "letter": "C",
            "text": "Tích tụ tư bản vừa làm tăng quy mô tư bản cá biệt vừa làm tăng quy"
          },
          {
            "letter": "D",
            "text": "Tập trung tư bản chỉ làm tăng quy mô tư bản cá biệt, không làm tăng E. quy mô tư bản xã hội. F. Nguồn gốc trực tiếp của tư bản tích tụ và tập trung."
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 7,
        "orig_id": 181,
        "title_raw": "Câu 7.[!b:$ Chủ nghĩa tư bản ra đời khi nào?$]",
        "clean_text": "Chủ nghĩa tư bản ra đời khi nào?",
        "options_raw": [
          "*A. Tư liệu sản xuất tập trung vào một số ít người còn đa số người bị mất hết TLSX",
          "B. Trong xã hội xuất hiện giai cấp bóc lột và bị bóc lột",
          "C. Sản xuất hàng hoá đã phát triển cao",
          "D. Phân công lao động đã phát triển cao"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tư liệu sản xuất tập trung vào một số ít người còn đa số người bị mất hết TLSX"
          },
          {
            "letter": "B",
            "text": "Trong xã hội xuất hiện giai cấp bóc lột và bị bóc lột"
          },
          {
            "letter": "C",
            "text": "Sản xuất hàng hoá đã phát triển cao"
          },
          {
            "letter": "D",
            "text": "Phân công lao động đã phát triển cao"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tư liệu sản xuất tập trung vào một số ít người còn đa số người bị mất hết TLSX"
      },
      {
        "q_num": 8,
        "orig_id": 172,
        "title_raw": "Câu 8.[!b:$ Phương pháp sản xuất giá trị thặng dư tuyệt đối là?$]",
        "clean_text": "Phương pháp sản xuất giá trị thặng dư tuyệt đối là?",
        "options_raw": [
          "A. Sử dụng kỹ thuật tiên tiến, cải tiến tổ chức quản lý",
          "B. Giảm giá trị sức lao động",
          "*C. Kéo dài thời gian của ngày lao động, còn thời gian lao động cần thiết không thay đổi",
          "D. Tiết kiệm chi phí sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sử dụng kỹ thuật tiên tiến, cải tiến tổ chức quản lý"
          },
          {
            "letter": "B",
            "text": "Giảm giá trị sức lao động"
          },
          {
            "letter": "C",
            "text": "Kéo dài thời gian của ngày lao động, còn thời gian lao động cần thiết không thay đổi"
          },
          {
            "letter": "D",
            "text": "Tiết kiệm chi phí sản xuất"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Kéo dài thời gian của ngày lao động, còn thời gian lao động cần thiết không thay đổi"
      },
      {
        "q_num": 9,
        "orig_id": 107,
        "title_raw": "Câu 9.[!b:$ Khi xem xét phương pháp sản xuất giá trị thặng dư tuyệt đối, những ý nào dưới đây không đúng?$]",
        "clean_text": "Khi xem xét phương pháp sản xuất giá trị thặng dư tuyệt đối, những ý nào dưới đây không đúng?",
        "options_raw": [
          "A. Thời gian lao động thặng dư thay đổi",
          "*B. Thời gian lao động cần thiết của người công nhân thay đổi",
          "C. Ngày lao động thay đổi",
          "D. Giá trị sức lao động không đổi"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Thời gian lao động thặng dư thay đổi"
          },
          {
            "letter": "B",
            "text": "Thời gian lao động cần thiết của người công nhân thay đổi"
          },
          {
            "letter": "C",
            "text": "Ngày lao động thay đổi"
          },
          {
            "letter": "D",
            "text": "Giá trị sức lao động không đổi"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Thời gian lao động cần thiết của người công nhân thay đổi"
      },
      {
        "q_num": 10,
        "orig_id": 162,
        "title_raw": "Câu 10.[!b:$ Sự hình thành các tổ chức độc quyền dựa trên cơ sở nào?$]",
        "clean_text": "Sự hình thành các tổ chức độc quyền dựa trên cơ sở nào?",
        "options_raw": [
          "A. Sản xuất nhỏ phân tán",
          "B. Sự xuất hiện các thành tựu mới của khoa học",
          "*C. Tích tụ tập trung sản xuất và sự ra đời của các xí nghiệp quy mô lớn",
          "D. Sự hoàn thiện QHSX - TBCN"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sản xuất nhỏ phân tán"
          },
          {
            "letter": "B",
            "text": "Sự xuất hiện các thành tựu mới của khoa học"
          },
          {
            "letter": "C",
            "text": "Tích tụ tập trung sản xuất và sự ra đời của các xí nghiệp quy mô lớn"
          },
          {
            "letter": "D",
            "text": "Sự hoàn thiện QHSX - TBCN"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tích tụ tập trung sản xuất và sự ra đời của các xí nghiệp quy mô lớn"
      },
      {
        "q_num": 11,
        "orig_id": 121,
        "title_raw": "Câu 11.[!b:$ Quan hệ tăng cường độ lao động với giá trị hàng hoá? Chọn ý đúng:$]",
        "clean_text": "Quan hệ tăng cường độ lao động với giá trị hàng hoá? Chọn ý đúng:",
        "options_raw": [
          "*A. Tăng cường độ lao động thì giá trị 1 đơn vị hàng hoá không thay đổi",
          "B. Tất cả các đáp án",
          "C. Tăng cường độ lao động thì giá trị 1 đơn vị hàng hoá tăng lên",
          "D. Giá trị 1 đơn vị hàng hoá tỷ lệ thuận với CĐLĐ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tăng cường độ lao động thì giá trị 1 đơn vị hàng hoá không thay đổi"
          },
          {
            "letter": "B",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "C",
            "text": "Tăng cường độ lao động thì giá trị 1 đơn vị hàng hoá tăng lên"
          },
          {
            "letter": "D",
            "text": "Giá trị 1 đơn vị hàng hoá tỷ lệ thuận với CĐLĐ"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tăng cường độ lao động thì giá trị 1 đơn vị hàng hoá không thay đổi"
      },
      {
        "q_num": 12,
        "orig_id": 18,
        "title_raw": "Câu 12.[!b:$ Sở hữu nhà nước được hình thành bằng cách:$]",
        "clean_text": "Sở hữu nhà nước được hình thành bằng cách:",
        "options_raw": [
          "A. Quốc hữu hoá",
          "B. Xây dựng xí nghiệp nhà nước bằng ngân sách",
          "*C. Tất cả các phương án",
          "D. Mua cổ phần của doanh nghiệp tư nhân"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quốc hữu hoá"
          },
          {
            "letter": "B",
            "text": "Xây dựng xí nghiệp nhà nước bằng ngân sách"
          },
          {
            "letter": "C",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "D",
            "text": "Mua cổ phần của doanh nghiệp tư nhân"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 13,
        "orig_id": 51,
        "title_raw": "Câu 13.[!b:$ Khi NSLĐ tăng lên thì phần giá trị cũ (c) trong một hàng hoá thay đổi thế nào?$]",
        "clean_text": "Khi NSLĐ tăng lên thì phần giá trị cũ (c) trong một hàng hoá thay đổi thế nào?",
        "options_raw": [
          "A. Có thể tăng lên",
          "*B. Có thể không thay đổi",
          "C. Có thể tăng, có thể giảm",
          "D. Có thể giảm xuống"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Có thể tăng lên"
          },
          {
            "letter": "B",
            "text": "Có thể không thay đổi"
          },
          {
            "letter": "C",
            "text": "Có thể tăng, có thể giảm"
          },
          {
            "letter": "D",
            "text": "Có thể giảm xuống"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Có thể không thay đổi"
      },
      {
        "q_num": 14,
        "orig_id": 176,
        "title_raw": "Câu 14.[!b:$ Giá trị hàng hoá sức lao động gồm:$]",
        "clean_text": "Giá trị hàng hoá sức lao động gồm:",
        "options_raw": [
          "*A. Tất cả các phương án",
          "B. Giá trị các tư liệu tiêu dùng để tái sản xuất sức lao động của công",
          "C. Chi phí để thoả mãn nhu cầu văn hoá, tinh thần E. Chi phí đào tạo người lao động",
          "D. nhân và nuôi gia đình anh ta"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Giá trị các tư liệu tiêu dùng để tái sản xuất sức lao động của công"
          },
          {
            "letter": "C",
            "text": "Chi phí để thoả mãn nhu cầu văn hoá, tinh thần E. Chi phí đào tạo người lao động"
          },
          {
            "letter": "D",
            "text": "nhân và nuôi gia đình anh ta"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 15,
        "orig_id": 49,
        "title_raw": "Câu 15.[!b:$ Khi đồng thời tăng NSLĐ và CĐLĐ lên 2 lần thì ý nào dưới đây là đúng?$]",
        "clean_text": "Khi đồng thời tăng NSLĐ và CĐLĐ lên 2 lần thì ý nào dưới đây là đúng?",
        "options_raw": [
          "A. Giá trị 1 đơn vị hàng hoá không đổi",
          "B. Giá trị 1 đơn vị hàng hoá giảm 4 lần",
          "C. Tổng số giá trị hàng hoá tăng 4 lần",
          "*D. Tổng số hàng hoá tăng 4 lần"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giá trị 1 đơn vị hàng hoá không đổi"
          },
          {
            "letter": "B",
            "text": "Giá trị 1 đơn vị hàng hoá giảm 4 lần"
          },
          {
            "letter": "C",
            "text": "Tổng số giá trị hàng hoá tăng 4 lần"
          },
          {
            "letter": "D",
            "text": "Tổng số hàng hoá tăng 4 lần"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tổng số hàng hoá tăng 4 lần"
      },
      {
        "q_num": 16,
        "orig_id": 8,
        "title_raw": "Câu 16.[!b:$ Đầu tư nước ngoài và xuất khẩu tư bản là:$]",
        "clean_text": "Đầu tư nước ngoài và xuất khẩu tư bản là:",
        "options_raw": [
          "*A. Tên gọi của đầu tư nước ngoài trong những điều kiện khác nhau",
          "B. Giống nhau về mục đích, khác nhau về phương thức",
          "C. Một hình thức đầu tư, khác nhau về tên gọi",
          "D. Hai hình thức đầu tư khác nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tên gọi của đầu tư nước ngoài trong những điều kiện khác nhau"
          },
          {
            "letter": "B",
            "text": "Giống nhau về mục đích, khác nhau về phương thức"
          },
          {
            "letter": "C",
            "text": "Một hình thức đầu tư, khác nhau về tên gọi"
          },
          {
            "letter": "D",
            "text": "Hai hình thức đầu tư khác nhau"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tên gọi của đầu tư nước ngoài trong những điều kiện khác nhau"
      },
      {
        "q_num": 17,
        "orig_id": 120,
        "title_raw": "Câu 17.[!b:$ Giá trị cá biệt của hàng hoá được quyết định bởi?$]",
        "clean_text": "Giá trị cá biệt của hàng hoá được quyết định bởi?",
        "options_raw": [
          "A. Hao phí lao động giản đơn trung bình quyết định",
          "*B. Hao phí lao động cá biệt của người sản xuất ra hàng hoá đó quyết định",
          "C. Hao phí lao động xã hội quyết định",
          "D. Hao phí lao động của ngành quyết định"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hao phí lao động giản đơn trung bình quyết định"
          },
          {
            "letter": "B",
            "text": "Hao phí lao động cá biệt của người sản xuất ra hàng hoá đó quyết định"
          },
          {
            "letter": "C",
            "text": "Hao phí lao động xã hội quyết định"
          },
          {
            "letter": "D",
            "text": "Hao phí lao động của ngành quyết định"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Hao phí lao động cá biệt của người sản xuất ra hàng hoá đó quyết định"
      },
      {
        "q_num": 18,
        "orig_id": 68,
        "title_raw": "Câu 18.[!b:$ Nhận thức không đúng về xu hướng toàn cầu hoá?$]",
        "clean_text": "Nhận thức không đúng về xu hướng toàn cầu hoá?",
        "options_raw": [
          "A. Có tác động mạnh mẽ đến mọi mặt của nền kinh tế - xã hội thế giới",
          "B. Quá trình liên kết giữa các quốc gia trên thế giới về nhiều mặt",
          "C. Toàn cầu hoá liên kết giữa các quốc gia từ kinh tế đến văn hoá, khoa học",
          "*D. Quá trình liên kết giữa các quốc gia trên thế giới về một số mặt trong lĩnh vực kinh tế"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Có tác động mạnh mẽ đến mọi mặt của nền kinh tế - xã hội thế giới"
          },
          {
            "letter": "B",
            "text": "Quá trình liên kết giữa các quốc gia trên thế giới về nhiều mặt"
          },
          {
            "letter": "C",
            "text": "Toàn cầu hoá liên kết giữa các quốc gia từ kinh tế đến văn hoá, khoa học"
          },
          {
            "letter": "D",
            "text": "Quá trình liên kết giữa các quốc gia trên thế giới về một số mặt trong lĩnh vực kinh tế"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Quá trình liên kết giữa các quốc gia trên thế giới về một số mặt trong lĩnh vực kinh tế"
      },
      {
        "q_num": 19,
        "orig_id": 137,
        "title_raw": "Câu 19.[!b:$ Yếu tố quyết định đến giá cả hàng hoá là$]",
        "clean_text": "Yếu tố quyết định đến giá cả hàng hoá là",
        "options_raw": [
          "*A. Giá trị của hàng hoá",
          "B. Quan hệ cung cầu về hàng hoá",
          "C. Giá trị sử dụng của hàng hoá",
          "D. Mốt thời trang của hàng hoá"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giá trị của hàng hoá"
          },
          {
            "letter": "B",
            "text": "Quan hệ cung cầu về hàng hoá"
          },
          {
            "letter": "C",
            "text": "Giá trị sử dụng của hàng hoá"
          },
          {
            "letter": "D",
            "text": "Mốt thời trang của hàng hoá"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Giá trị của hàng hoá"
      },
      {
        "q_num": 20,
        "orig_id": 93,
        "title_raw": "Câu 20.[!b:$ Trong giai đoạn CNTB độc quyền có những hình thức cạnh tranh nào?$]",
        "clean_text": "Trong giai đoạn CNTB độc quyền có những hình thức cạnh tranh nào?",
        "options_raw": [
          "A. Cạnh tranh trong nội bộ tổ chức độc quyền",
          "B. Cạnh tranh giữa tổ chức độc quyền với xí nghiệp ngoài độc quyền",
          "C. Cạnh tranh giữa các tổ chức độc quyền với nhau",
          "*D. Tất cả các đáp án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cạnh tranh trong nội bộ tổ chức độc quyền"
          },
          {
            "letter": "B",
            "text": "Cạnh tranh giữa tổ chức độc quyền với xí nghiệp ngoài độc quyền"
          },
          {
            "letter": "C",
            "text": "Cạnh tranh giữa các tổ chức độc quyền với nhau"
          },
          {
            "letter": "D",
            "text": "Tất cả các đáp án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 21,
        "orig_id": 73,
        "title_raw": "Câu 21.[!b:$ Các công cụ để nhà nước điều tiết hoạt động kinh tế đối ngoại là:$]",
        "clean_text": "Các công cụ để nhà nước điều tiết hoạt động kinh tế đối ngoại là:",
        "options_raw": [
          "A. Đảm bảo tín dụng xuất khẩu, trợ cấp xuất khẩu",
          "*B. Tất cả các đáp án",
          "C. Tỷ giá hối đoái, hạn ngạch",
          "D. Thuế xuất nhập khẩu"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đảm bảo tín dụng xuất khẩu, trợ cấp xuất khẩu"
          },
          {
            "letter": "B",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "C",
            "text": "Tỷ giá hối đoái, hạn ngạch"
          },
          {
            "letter": "D",
            "text": "Thuế xuất nhập khẩu"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 22,
        "orig_id": 78,
        "title_raw": "Câu 22.[!b:$ Tiến lên CNXH bỏ qua chế độ TBCN, nhưng không thể bỏ qua:$]",
        "clean_text": "Tiến lên CNXH bỏ qua chế độ TBCN, nhưng không thể bỏ qua:",
        "options_raw": [
          "*A. Tất cả các đáp án",
          "B. Những tính quy luật của sự phát triển LLSX",
          "C. Những thành tựu của kinh tế thị trường",
          "D. Những thành tựu văn minh mà nhân loại đạt được trong CNTB, đặc biệt là KHCN"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "B",
            "text": "Những tính quy luật của sự phát triển LLSX"
          },
          {
            "letter": "C",
            "text": "Những thành tựu của kinh tế thị trường"
          },
          {
            "letter": "D",
            "text": "Những thành tựu văn minh mà nhân loại đạt được trong CNTB, đặc biệt là KHCN"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 23,
        "orig_id": 182,
        "title_raw": "Câu 23.[!b:$ Tư bản là?$]",
        "clean_text": "Tư bản là?",
        "options_raw": [
          "A. Tiền có khả năng đẻ ra tiền",
          "B. Tiền và máy móc thiết bị",
          "C. Công cụ sản xuất và nguyên vật liệu",
          "*D. Giá trị mang lại giá trị thặng dư bằng cách bóc lột lao động làm thuê"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tiền có khả năng đẻ ra tiền"
          },
          {
            "letter": "B",
            "text": "Tiền và máy móc thiết bị"
          },
          {
            "letter": "C",
            "text": "Công cụ sản xuất và nguyên vật liệu"
          },
          {
            "letter": "D",
            "text": "Giá trị mang lại giá trị thặng dư bằng cách bóc lột lao động làm thuê"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Giá trị mang lại giá trị thặng dư bằng cách bóc lột lao động làm thuê"
      },
      {
        "q_num": 24,
        "orig_id": 150,
        "title_raw": "Câu 24.[!b:$ Trong TKQĐ lên CNXH có những mâu thuẫn cơ bản nào:$]",
        "clean_text": "Trong TKQĐ lên CNXH có những mâu thuẫn cơ bản nào:",
        "options_raw": [
          "A. Mâu thuẫn giữa CNXH với trình tự phát triển tiểu tư sản",
          "B. Tất cả các phương án",
          "*C. Mâu thuẫn giữa CNXH với CNTB",
          "D. Mâu thuẫn giữa giai cấp công nhân và nhân dân lao động với giai cấp tư sản."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Mâu thuẫn giữa CNXH với trình tự phát triển tiểu tư sản"
          },
          {
            "letter": "B",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "C",
            "text": "Mâu thuẫn giữa CNXH với CNTB"
          },
          {
            "letter": "D",
            "text": "Mâu thuẫn giữa giai cấp công nhân và nhân dân lao động với giai cấp tư sản."
          }
        ],
        "correct_letter": "C",
        "correct_text": "Mâu thuẫn giữa CNXH với CNTB"
      },
      {
        "q_num": 25,
        "orig_id": 6,
        "title_raw": "Câu 25.[!b:$ Khi đồng nội tệ được định giá thấp sẽ:$]",
        "clean_text": "Khi đồng nội tệ được định giá thấp sẽ:",
        "options_raw": [
          "A. Khuyến khích cả xuất và nhập khẩu",
          "B. Khuyến khích nhập khẩu, hạn chế xuất khẩu",
          "C. Hạn chế cả xuất và nhập khẩu",
          "*D. Hạn chế nhập khẩu, khuyến khích xuất khẩu"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Khuyến khích cả xuất và nhập khẩu"
          },
          {
            "letter": "B",
            "text": "Khuyến khích nhập khẩu, hạn chế xuất khẩu"
          },
          {
            "letter": "C",
            "text": "Hạn chế cả xuất và nhập khẩu"
          },
          {
            "letter": "D",
            "text": "Hạn chế nhập khẩu, khuyến khích xuất khẩu"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Hạn chế nhập khẩu, khuyến khích xuất khẩu"
      },
      {
        "q_num": 26,
        "orig_id": 183,
        "title_raw": "Câu 26.[!b:$ Học thuyết kinh tế nào của C.Mác được coi là hòn đá tảng trong học thuyết kinh tế của C.Mác?$]",
        "clean_text": "Học thuyết kinh tế nào của C.Mác được coi là hòn đá tảng trong học thuyết kinh tế của C.Mác?",
        "options_raw": [
          "A. Học thuyết tích luỹ tư sản",
          "B. Học thuyết giá trị lao động",
          "*C. Học thuyết giá trị thặng dư",
          "D. Học thuyết tái sản xuất tư bản xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Học thuyết tích luỹ tư sản"
          },
          {
            "letter": "B",
            "text": "Học thuyết giá trị lao động"
          },
          {
            "letter": "C",
            "text": "Học thuyết giá trị thặng dư"
          },
          {
            "letter": "D",
            "text": "Học thuyết tái sản xuất tư bản xã hội"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Học thuyết giá trị thặng dư"
      },
      {
        "q_num": 27,
        "orig_id": 180,
        "title_raw": "Câu 27.[!b:$ Tích luỹ nguyên thuỷ được thực hiện bằng các biện pháp gì?$]",
        "clean_text": "Tích luỹ nguyên thuỷ được thực hiện bằng các biện pháp gì?",
        "options_raw": [
          "A. Tước đoạt người sản xuất nhỏ, nhất là nông dân; Chinh phục, bóc lột thuộc địa",
          "B. Chinh phục, bóc lột thuộc địa; Trao đổi không ngang giá, bất bình đẳng",
          "*C. Tước đoạt người sản xuất nhỏ, nhất là nông dân; Chinh phục, bóc lột thuộc địa; Trao đổi không ngang giá, bất bình đẳng",
          "D. Tước đoạt người sản xuất nhỏ, nhất là nông dân; Trao đổi không ngang giá, bất bình đẳng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tước đoạt người sản xuất nhỏ, nhất là nông dân; Chinh phục, bóc lột thuộc địa"
          },
          {
            "letter": "B",
            "text": "Chinh phục, bóc lột thuộc địa; Trao đổi không ngang giá, bất bình đẳng"
          },
          {
            "letter": "C",
            "text": "Tước đoạt người sản xuất nhỏ, nhất là nông dân; Chinh phục, bóc lột thuộc địa; Trao đổi không ngang giá, bất bình đẳng"
          },
          {
            "letter": "D",
            "text": "Tước đoạt người sản xuất nhỏ, nhất là nông dân; Trao đổi không ngang giá, bất bình đẳng"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tước đoạt người sản xuất nhỏ, nhất là nông dân; Chinh phục, bóc lột thuộc địa; Trao đổi không ngang giá, bất bình đẳng"
      },
      {
        "q_num": 28,
        "orig_id": 10,
        "title_raw": "Câu 28.[!b:$ Đặc điểm của Con -sơn là:$]",
        "clean_text": "Đặc điểm của Con -sơn là:",
        "options_raw": [
          "A. bố ở nhiều nước",
          "*B. Độc quyền đa ngành, có hàng trăm công ty quan hệ với nhau, phân",
          "C. Độc quyền trong 1 ngành, quy mô rất lớn, ở nhiều nước",
          "D. Độc quyền đa ngành, quy mô lớn, trong một nước E. Độc quyền đơn ngành, quy mô lớn, ở nhiều nước"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "bố ở nhiều nước"
          },
          {
            "letter": "B",
            "text": "Độc quyền đa ngành, có hàng trăm công ty quan hệ với nhau, phân"
          },
          {
            "letter": "C",
            "text": "Độc quyền trong 1 ngành, quy mô rất lớn, ở nhiều nước"
          },
          {
            "letter": "D",
            "text": "Độc quyền đa ngành, quy mô lớn, trong một nước E. Độc quyền đơn ngành, quy mô lớn, ở nhiều nước"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Độc quyền đa ngành, có hàng trăm công ty quan hệ với nhau, phân"
      },
      {
        "q_num": 29,
        "orig_id": 198,
        "title_raw": "Câu 29.[!b:$ Hàng hoá là?$]",
        "clean_text": "Hàng hoá là?",
        "options_raw": [
          "A. Sản phẩm của lao động để thoả mãn nhu cầu của con người",
          "B. Sản phẩm được sản xuất ra để đem bán",
          "C. Sản phẩm ở trên thị trường",
          "*D. Sản phẩm của lao động có thể thoả mãn nhu cầu nào đó của con người thông qua mua bán"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sản phẩm của lao động để thoả mãn nhu cầu của con người"
          },
          {
            "letter": "B",
            "text": "Sản phẩm được sản xuất ra để đem bán"
          },
          {
            "letter": "C",
            "text": "Sản phẩm ở trên thị trường"
          },
          {
            "letter": "D",
            "text": "Sản phẩm của lao động có thể thoả mãn nhu cầu nào đó của con người thông qua mua bán"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Sản phẩm của lao động có thể thoả mãn nhu cầu nào đó của con người thông qua mua bán"
      },
      {
        "q_num": 30,
        "orig_id": 69,
        "title_raw": "Câu 30.[!b:$ Đâu không phải là tính khách quan của toàn cầu hoá?$]",
        "clean_text": "Đâu không phải là tính khách quan của toàn cầu hoá?",
        "options_raw": [
          "A. Sự phát triển mạnh mẽ của kinh tế thị trường hiện đại là nguyên nhân của toàn cầu hóa",
          "*B. Do ý muốn của các siêu cường kinh tế trên thế giới",
          "C. Sự tăng cường vai trò của các tổ chức kinh tế quốc tế và khu vực làm thúc đẩy mạnh mẽ toàn cầu hóa",
          "D. Kết quả của quá trình phát triển lực lượng sản xuất và phân công lao động xã hội ngày càng mang tính quốc tế hoá cao"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự phát triển mạnh mẽ của kinh tế thị trường hiện đại là nguyên nhân của toàn cầu hóa"
          },
          {
            "letter": "B",
            "text": "Do ý muốn của các siêu cường kinh tế trên thế giới"
          },
          {
            "letter": "C",
            "text": "Sự tăng cường vai trò của các tổ chức kinh tế quốc tế và khu vực làm thúc đẩy mạnh mẽ toàn cầu hóa"
          },
          {
            "letter": "D",
            "text": "Kết quả của quá trình phát triển lực lượng sản xuất và phân công lao động xã hội ngày càng mang tính quốc tế hoá cao"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Do ý muốn của các siêu cường kinh tế trên thế giới"
      }
    ]
  },
  {
    "test_num": 3,
    "title": "Đề trắc nghiệm số 3",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 104,
        "title_raw": "Câu 1.[!b:$ Nhận xét về giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch, ý nào dưới đây là đúng$]",
        "clean_text": "Nhận xét về giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch, ý nào dưới đây là đúng",
        "options_raw": [
          "*A. Đều dựa trên cơ sở tăng NSLĐ",
          "B. Đều dựa trên việc kéo dài ngày lao động",
          "C. tương đối. E. Giá trị thặng dư tương đối là cơ sở tạo ra giá trị thặng dư siêu ngạch",
          "D. Giá trị thặng dư siêu ngạch không thể chuyển hoá thành giá trị thặng dư"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đều dựa trên cơ sở tăng NSLĐ"
          },
          {
            "letter": "B",
            "text": "Đều dựa trên việc kéo dài ngày lao động"
          },
          {
            "letter": "C",
            "text": "tương đối. E. Giá trị thặng dư tương đối là cơ sở tạo ra giá trị thặng dư siêu ngạch"
          },
          {
            "letter": "D",
            "text": "Giá trị thặng dư siêu ngạch không thể chuyển hoá thành giá trị thặng dư"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Đều dựa trên cơ sở tăng NSLĐ"
      },
      {
        "q_num": 2,
        "orig_id": 159,
        "title_raw": "Câu 2.[!b:$ Chế độ tham dự của tư bản tài chính được thiết lập là do?$]",
        "clean_text": "Chế độ tham dự của tư bản tài chính được thiết lập là do?",
        "options_raw": [
          "*A. Số cổ phiếu khống chế nắm công ty mẹ, con, cháu",
          "B. Yêu cầu tổ chức của các ngân hàng",
          "C. Yêu cầu của các tổ chức độc quyền công nghiệp",
          "D. Quyết định của nhà nước"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Số cổ phiếu khống chế nắm công ty mẹ, con, cháu"
          },
          {
            "letter": "B",
            "text": "Yêu cầu tổ chức của các ngân hàng"
          },
          {
            "letter": "C",
            "text": "Yêu cầu của các tổ chức độc quyền công nghiệp"
          },
          {
            "letter": "D",
            "text": "Quyết định của nhà nước"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Số cổ phiếu khống chế nắm công ty mẹ, con, cháu"
      },
      {
        "q_num": 3,
        "orig_id": 134,
        "title_raw": "Câu 3.[!b:$ Khi cường độ lao động tăng lên thì điều gì xảy ra?$]",
        "clean_text": "Khi cường độ lao động tăng lên thì điều gì xảy ra?",
        "options_raw": [
          "A. Giá cả hàng hoá tăng lên",
          "B. Giá trị 1 đơn vị hàng hoá giảm đi",
          "*C. Số lượng hàng hoá sản xuất ra trong một đơn vị thời gian tăng lên",
          "D. Số lượng lao động hao phí trong thời gian đó không thay đổi"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giá cả hàng hoá tăng lên"
          },
          {
            "letter": "B",
            "text": "Giá trị 1 đơn vị hàng hoá giảm đi"
          },
          {
            "letter": "C",
            "text": "Số lượng hàng hoá sản xuất ra trong một đơn vị thời gian tăng lên"
          },
          {
            "letter": "D",
            "text": "Số lượng lao động hao phí trong thời gian đó không thay đổi"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Số lượng hàng hoá sản xuất ra trong một đơn vị thời gian tăng lên"
      },
      {
        "q_num": 4,
        "orig_id": 48,
        "title_raw": "Câu 4.[!b:$ Chọn ý đúng về quan hệ cung - cầu đối với giá trị, giá cả:$]",
        "clean_text": "Chọn ý đúng về quan hệ cung - cầu đối với giá trị, giá cả:",
        "options_raw": [
          "A. Chỉ quyết định đến giá cả và có ảnh hưởng đến giá trị",
          "B. Quyết định giá trị và giá cả hàng hoá",
          "*C. Có ảnh hưởng tới giá cả thị trường",
          "D. Không có ảnh hưởng đến giá trị và giá cả"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Chỉ quyết định đến giá cả và có ảnh hưởng đến giá trị"
          },
          {
            "letter": "B",
            "text": "Quyết định giá trị và giá cả hàng hoá"
          },
          {
            "letter": "C",
            "text": "Có ảnh hưởng tới giá cả thị trường"
          },
          {
            "letter": "D",
            "text": "Không có ảnh hưởng đến giá trị và giá cả"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Có ảnh hưởng tới giá cả thị trường"
      },
      {
        "q_num": 5,
        "orig_id": 199,
        "title_raw": "Câu 5.[!b:$ Sản xuất hàng hoá xuất hiện dựa trên?$]",
        "clean_text": "Sản xuất hàng hoá xuất hiện dựa trên?",
        "options_raw": [
          "A. Phân công lao động và sự tách biệt về kinh tế giữa những người sản xuất",
          "*B. Phân công lao động xã hội và chế độ tư hữu hoặc những hình thức sở hữu khác nhau về TLSX",
          "C. Phân công lao động cá biệt và chế độ tư hữu về tư liệu sản xuất",
          "D. Phân công lao động chung và chế độ sở hữu khác nhau về TLSX"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Phân công lao động và sự tách biệt về kinh tế giữa những người sản xuất"
          },
          {
            "letter": "B",
            "text": "Phân công lao động xã hội và chế độ tư hữu hoặc những hình thức sở hữu khác nhau về TLSX"
          },
          {
            "letter": "C",
            "text": "Phân công lao động cá biệt và chế độ tư hữu về tư liệu sản xuất"
          },
          {
            "letter": "D",
            "text": "Phân công lao động chung và chế độ sở hữu khác nhau về TLSX"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Phân công lao động xã hội và chế độ tư hữu hoặc những hình thức sở hữu khác nhau về TLSX"
      },
      {
        "q_num": 6,
        "orig_id": 167,
        "title_raw": "Câu 6.[!b:$ Tiền công thực tế là gì?$]",
        "clean_text": "Tiền công thực tế là gì?",
        "options_raw": [
          "*A. Là số lượng hàng hoá và dịch vụ mà người lao động mua được bằng tiền công danh nghĩa.",
          "B. Là tổng số tiền nhận được thực tế trong 1 tháng.",
          "C. Là giá cả của sức lao động.",
          "D. Là số tiền trong sổ lương + tiền thưởng + các nguồn thu nhập khác"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là số lượng hàng hoá và dịch vụ mà người lao động mua được bằng tiền công danh nghĩa."
          },
          {
            "letter": "B",
            "text": "Là tổng số tiền nhận được thực tế trong 1 tháng."
          },
          {
            "letter": "C",
            "text": "Là giá cả của sức lao động."
          },
          {
            "letter": "D",
            "text": "Là số tiền trong sổ lương + tiền thưởng + các nguồn thu nhập khác"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Là số lượng hàng hoá và dịch vụ mà người lao động mua được bằng tiền công danh nghĩa."
      },
      {
        "q_num": 7,
        "orig_id": 9,
        "title_raw": "Câu 7.[!b:$ Chọn các ý đúng dưới đây: trong CNTB độc quyền:$]",
        "clean_text": "Chọn các ý đúng dưới đây: trong CNTB độc quyền:",
        "options_raw": [
          "*A. Cạnh tranh có những hình thức mới",
          "B. Do độc quyền thống trị nên không còn cạnh tranh",
          "C. Vẫn còn cạnh tranh nhưng cạnh tranh đỡ gay gắt hơn",
          "D. Chỉ còn cạnh tranh giữa các ngành, không còn cạnh tranh trong nội bộ ngành"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cạnh tranh có những hình thức mới"
          },
          {
            "letter": "B",
            "text": "Do độc quyền thống trị nên không còn cạnh tranh"
          },
          {
            "letter": "C",
            "text": "Vẫn còn cạnh tranh nhưng cạnh tranh đỡ gay gắt hơn"
          },
          {
            "letter": "D",
            "text": "Chỉ còn cạnh tranh giữa các ngành, không còn cạnh tranh trong nội bộ ngành"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Cạnh tranh có những hình thức mới"
      },
      {
        "q_num": 8,
        "orig_id": 140,
        "title_raw": "Câu 8.[!b:$ Hãy chọn phương án đúng về đặc điểm của quy luật kinh tế?$]",
        "clean_text": "Hãy chọn phương án đúng về đặc điểm của quy luật kinh tế?",
        "options_raw": [
          "*A. Mang tính khách quan",
          "B. Mang tính chủ quan",
          "C. Mang tính chính trị",
          "D. Mang tính giai cấp"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Mang tính khách quan"
          },
          {
            "letter": "B",
            "text": "Mang tính chủ quan"
          },
          {
            "letter": "C",
            "text": "Mang tính chính trị"
          },
          {
            "letter": "D",
            "text": "Mang tính giai cấp"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Mang tính khách quan"
      },
      {
        "q_num": 9,
        "orig_id": 55,
        "title_raw": "Câu 9.[!b:$ Chọn phương án đúng trong các phương án sau đây:$]",
        "clean_text": "Chọn phương án đúng trong các phương án sau đây:",
        "options_raw": [
          "A. Lao động cụ thể được thực hiện trước lao động trừu tượng",
          "B. trình độ thấp chỉ có lao động cụ thể. E. Lao động trừu tượng được thực hiện trước lao động cụ thể",
          "C. Lao động trừu tượng chỉ có ở người có trình độ cao, còn người có",
          "*D. Lao động cụ thể tạo ra tính hữu ích của sản phẩm"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lao động cụ thể được thực hiện trước lao động trừu tượng"
          },
          {
            "letter": "B",
            "text": "trình độ thấp chỉ có lao động cụ thể. E. Lao động trừu tượng được thực hiện trước lao động cụ thể"
          },
          {
            "letter": "C",
            "text": "Lao động trừu tượng chỉ có ở người có trình độ cao, còn người có"
          },
          {
            "letter": "D",
            "text": "Lao động cụ thể tạo ra tính hữu ích của sản phẩm"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Lao động cụ thể tạo ra tính hữu ích của sản phẩm"
      },
      {
        "q_num": 10,
        "orig_id": 155,
        "title_raw": "Câu 10.[!b:$ Bản chất của CNTB độc quyền nhà nước là?$]",
        "clean_text": "Bản chất của CNTB độc quyền nhà nước là?",
        "options_raw": [
          "A. Các tổ chức độc quyền phụ thuộc vào nhà nước",
          "*B. Sự kết hợp giữa tổ chức độc quyền tư nhân và nhà nước tư sản",
          "C. Nhà nước tư sản can thiệp vào kinh tế, chi phối độc quyền",
          "D. Sự thoả hiệp giữa nhà nước và tổ chức độc quyền"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Các tổ chức độc quyền phụ thuộc vào nhà nước"
          },
          {
            "letter": "B",
            "text": "Sự kết hợp giữa tổ chức độc quyền tư nhân và nhà nước tư sản"
          },
          {
            "letter": "C",
            "text": "Nhà nước tư sản can thiệp vào kinh tế, chi phối độc quyền"
          },
          {
            "letter": "D",
            "text": "Sự thoả hiệp giữa nhà nước và tổ chức độc quyền"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Sự kết hợp giữa tổ chức độc quyền tư nhân và nhà nước tư sản"
      },
      {
        "q_num": 11,
        "orig_id": 139,
        "title_raw": "Câu 11.[!b:$ Lao động sản xuất có đặc trưng cơ bản là:$]",
        "clean_text": "Lao động sản xuất có đặc trưng cơ bản là:",
        "options_raw": [
          "A. Tạo ra sự giàu có của mỗi người",
          "B. Toàn bộ thể lực và trí lực trong một con người đang sống và được vận dụng để sản xuất ra giá trị sử dụng nào đó",
          "C. Là sự kết hợp giữa công cụ lao động và đối tượng lao động",
          "*D. Là hoạt động có mục đích, có ý thức của con người"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tạo ra sự giàu có của mỗi người"
          },
          {
            "letter": "B",
            "text": "Toàn bộ thể lực và trí lực trong một con người đang sống và được vận dụng để sản xuất ra giá trị sử dụng nào đó"
          },
          {
            "letter": "C",
            "text": "Là sự kết hợp giữa công cụ lao động và đối tượng lao động"
          },
          {
            "letter": "D",
            "text": "Là hoạt động có mục đích, có ý thức của con người"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Là hoạt động có mục đích, có ý thức của con người"
      },
      {
        "q_num": 12,
        "orig_id": 122,
        "title_raw": "Câu 12.[!b:$ Quan hệ tăng NSLĐ với giá trị hàng hoá, chọn các ý đúng dưới đây?$]",
        "clean_text": "Quan hệ tăng NSLĐ với giá trị hàng hoá, chọn các ý đúng dưới đây?",
        "options_raw": [
          "A. Tăng NSLĐ thì giá trị 1 đơn vị hàng hoá thay đổi",
          "B. Giá trị 1 đơn vị hàng hoá tỷ lệ nghịch với NSLĐ",
          "*C. Tất cả các đáp án",
          "D. Tăng NSLĐ thì tổng giá trị hàng hoá không thay đổi"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tăng NSLĐ thì giá trị 1 đơn vị hàng hoá thay đổi"
          },
          {
            "letter": "B",
            "text": "Giá trị 1 đơn vị hàng hoá tỷ lệ nghịch với NSLĐ"
          },
          {
            "letter": "C",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "D",
            "text": "Tăng NSLĐ thì tổng giá trị hàng hoá không thay đổi"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 13,
        "orig_id": 105,
        "title_raw": "Câu 13.[!b:$ Những ý kiến dưới đây về phương pháp sản xuất giá trị thặng dư tương đối, ý kiến nào đúng?$]",
        "clean_text": "Những ý kiến dưới đây về phương pháp sản xuất giá trị thặng dư tương đối, ý kiến nào đúng?",
        "options_raw": [
          "A. Ngày lao động thay đổi",
          "*B. Độ dài ngày lao động của công nhân không đổi",
          "C. Giá trị sức lao động không đổi",
          "D. Tiền công không đổi"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Ngày lao động thay đổi"
          },
          {
            "letter": "B",
            "text": "Độ dài ngày lao động của công nhân không đổi"
          },
          {
            "letter": "C",
            "text": "Giá trị sức lao động không đổi"
          },
          {
            "letter": "D",
            "text": "Tiền công không đổi"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Độ dài ngày lao động của công nhân không đổi"
      },
      {
        "q_num": 14,
        "orig_id": 57,
        "title_raw": "Câu 14.[!b:$ Khi đồng thời tăng năng suất lao động và cường độ lao động lên 2 lần thì ý nào dưới đây là đúng?$]",
        "clean_text": "Khi đồng thời tăng năng suất lao động và cường độ lao động lên 2 lần thì ý nào dưới đây là đúng?",
        "options_raw": [
          "A. Tổng số giá trị hàng hoá tăng 2 lần, tổng số hàng hoá tăng 2 lần",
          "B. Tổng số hàng hoá tăng lên 2 lần, giá trị 1 hàng hoá giảm 2 lần",
          "*C. Giá trị 1 hàng hoá giảm 2 lần, tổng số giá trị hàng hoá tăng 2 lần",
          "D. Tổng số hàng hoá tăng lên 4 lần, tổng số giá trị hàng hoá tăng lên 4 lần"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tổng số giá trị hàng hoá tăng 2 lần, tổng số hàng hoá tăng 2 lần"
          },
          {
            "letter": "B",
            "text": "Tổng số hàng hoá tăng lên 2 lần, giá trị 1 hàng hoá giảm 2 lần"
          },
          {
            "letter": "C",
            "text": "Giá trị 1 hàng hoá giảm 2 lần, tổng số giá trị hàng hoá tăng 2 lần"
          },
          {
            "letter": "D",
            "text": "Tổng số hàng hoá tăng lên 4 lần, tổng số giá trị hàng hoá tăng lên 4 lần"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Giá trị 1 hàng hoá giảm 2 lần, tổng số giá trị hàng hoá tăng 2 lần"
      },
      {
        "q_num": 15,
        "orig_id": 146,
        "title_raw": "Câu 15.[!b:$ Trong TKQĐ lên CNXH ở nước ta có những nhiệm vụ kinh tế cơ bản nào?$]",
        "clean_text": "Trong TKQĐ lên CNXH ở nước ta có những nhiệm vụ kinh tế cơ bản nào?",
        "options_raw": [
          "A. Mở rộng và nâng cao hiệu quả kinh tế đối ngoại.",
          "B. Phát triển LLSX, thực hiện CNH, HĐH đất nước",
          "C. Xây dựng QHSX mới theo định hướng XHCN",
          "*D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Mở rộng và nâng cao hiệu quả kinh tế đối ngoại."
          },
          {
            "letter": "B",
            "text": "Phát triển LLSX, thực hiện CNH, HĐH đất nước"
          },
          {
            "letter": "C",
            "text": "Xây dựng QHSX mới theo định hướng XHCN"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 16,
        "orig_id": 91,
        "title_raw": "Câu 16.[!b:$ Các cường quốc đế quốc xâm chiếm thuộc địa nhằm mục đích?$]",
        "clean_text": "Các cường quốc đế quốc xâm chiếm thuộc địa nhằm mục đích?",
        "options_raw": [
          "A. Thực hiện mục đích kinh tế - chính trị - quân sự",
          "B. Khống chế thị trường",
          "C. Đảm bảo nguồn nguyên liệu",
          "*D. Tất cả các đáp án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Thực hiện mục đích kinh tế - chính trị - quân sự"
          },
          {
            "letter": "B",
            "text": "Khống chế thị trường"
          },
          {
            "letter": "C",
            "text": "Đảm bảo nguồn nguyên liệu"
          },
          {
            "letter": "D",
            "text": "Tất cả các đáp án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 17,
        "orig_id": 41,
        "title_raw": "Câu 17.[!b:$ Người lao động nhận khoán công việc, khi hoàn thành nhận được một số lượng tiền thì đó là?$]",
        "clean_text": "Người lao động nhận khoán công việc, khi hoàn thành nhận được một số lượng tiền thì đó là?",
        "options_raw": [
          "A. Tiền công theo chất lượng công việc",
          "B. Tiền công tính theo thời gian",
          "C. Tiền công thực tế",
          "*D. Tiền công danh nghĩa"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tiền công theo chất lượng công việc"
          },
          {
            "letter": "B",
            "text": "Tiền công tính theo thời gian"
          },
          {
            "letter": "C",
            "text": "Tiền công thực tế"
          },
          {
            "letter": "D",
            "text": "Tiền công danh nghĩa"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tiền công danh nghĩa"
      },
      {
        "q_num": 18,
        "orig_id": 98,
        "title_raw": "Câu 18.[!b:$ Cơ sở chung của giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch là?$]",
        "clean_text": "Cơ sở chung của giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch là?",
        "options_raw": [
          "*A. Giảm giá trị sức lao động",
          "B. Tăng NSLĐ xã hội",
          "C. Tăng NSLĐ",
          "D. Tăng NSLĐ cá biệt"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giảm giá trị sức lao động"
          },
          {
            "letter": "B",
            "text": "Tăng NSLĐ xã hội"
          },
          {
            "letter": "C",
            "text": "Tăng NSLĐ"
          },
          {
            "letter": "D",
            "text": "Tăng NSLĐ cá biệt"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Giảm giá trị sức lao động"
      },
      {
        "q_num": 19,
        "orig_id": 152,
        "title_raw": "Câu 19.[!b:$ Thời kỳ quá độ lên CNXH là tất yếu đối với:$]",
        "clean_text": "Thời kỳ quá độ lên CNXH là tất yếu đối với:",
        "options_raw": [
          "A. Tất cả các nước trên thế giới",
          "*B. Tất cả các nước xây dựng CNXH",
          "C. Các nước bỏ qua CNTB lên CNXH",
          "D. Các nước TBCN kém phát triển lên CNXH"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các nước trên thế giới"
          },
          {
            "letter": "B",
            "text": "Tất cả các nước xây dựng CNXH"
          },
          {
            "letter": "C",
            "text": "Các nước bỏ qua CNTB lên CNXH"
          },
          {
            "letter": "D",
            "text": "Các nước TBCN kém phát triển lên CNXH"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tất cả các nước xây dựng CNXH"
      },
      {
        "q_num": 20,
        "orig_id": 111,
        "title_raw": "Câu 20.[!b:$ Sức lao động được hiểu là?$]",
        "clean_text": "Sức lao động được hiểu là?",
        "options_raw": [
          "A. Hoạt động có mục đích của con người để tạo ra của cải E. Hoạt động lao động sản xuất của con người",
          "*B. Toàn bộ thể lực và trí lực trong một con người đang sống và được",
          "C. vận dụng để sản xuất ra giá trị sử dụng nào đó",
          "D. Sức lao động là cái đảm bảo cho con người được trả công"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hoạt động có mục đích của con người để tạo ra của cải E. Hoạt động lao động sản xuất của con người"
          },
          {
            "letter": "B",
            "text": "Toàn bộ thể lực và trí lực trong một con người đang sống và được"
          },
          {
            "letter": "C",
            "text": "vận dụng để sản xuất ra giá trị sử dụng nào đó"
          },
          {
            "letter": "D",
            "text": "Sức lao động là cái đảm bảo cho con người được trả công"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Toàn bộ thể lực và trí lực trong một con người đang sống và được"
      },
      {
        "q_num": 21,
        "orig_id": 100,
        "title_raw": "Câu 21.[!b:$ Vai trò của máy móc trong quá trình tạo ra giá trị thặng dư, chọn ý đúng?$]",
        "clean_text": "Vai trò của máy móc trong quá trình tạo ra giá trị thặng dư, chọn ý đúng?",
        "options_raw": [
          "A. Máy móc và sức lao động đều tạo ra giá trị thặng dư",
          "B. Máy móc là nguồn gốc của giá trị thặng dư",
          "*C. Máy móc là tiền đề vật chất cho việc tạo ra giá trị thặng dư",
          "D. Máy móc là yếu tố quyết định để tạo ra giá trị thặng dư"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Máy móc và sức lao động đều tạo ra giá trị thặng dư"
          },
          {
            "letter": "B",
            "text": "Máy móc là nguồn gốc của giá trị thặng dư"
          },
          {
            "letter": "C",
            "text": "Máy móc là tiền đề vật chất cho việc tạo ra giá trị thặng dư"
          },
          {
            "letter": "D",
            "text": "Máy móc là yếu tố quyết định để tạo ra giá trị thặng dư"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Máy móc là tiền đề vật chất cho việc tạo ra giá trị thặng dư"
      },
      {
        "q_num": 22,
        "orig_id": 64,
        "title_raw": "Câu 22.[!b:$ Xu hướng toàn cầu hoá là?$]",
        "clean_text": "Xu hướng toàn cầu hoá là?",
        "options_raw": [
          "A. Quá trình liên kết các quốc gia trên thế giới về một số mặt",
          "B. Quá trình giảm khoảng cách giàu nghèo giữa các quốc gia trên thế giới",
          "C. Quá trình thúc đẩy sản xuất phát triển thông qua hợp tác quốc tế",
          "*D. Quá trình liên kết các quốc gia trên thế giới về nhiều mặt từ kinh tế đến văn hoá, khoa học"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quá trình liên kết các quốc gia trên thế giới về một số mặt"
          },
          {
            "letter": "B",
            "text": "Quá trình giảm khoảng cách giàu nghèo giữa các quốc gia trên thế giới"
          },
          {
            "letter": "C",
            "text": "Quá trình thúc đẩy sản xuất phát triển thông qua hợp tác quốc tế"
          },
          {
            "letter": "D",
            "text": "Quá trình liên kết các quốc gia trên thế giới về nhiều mặt từ kinh tế đến văn hoá, khoa học"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Quá trình liên kết các quốc gia trên thế giới về nhiều mặt từ kinh tế đến văn hoá, khoa học"
      },
      {
        "q_num": 23,
        "orig_id": 66,
        "title_raw": "Câu 23.[!b:$ Mặt trái lớn nhất của toàn cầu hoá kinh tế là?$]",
        "clean_text": "Mặt trái lớn nhất của toàn cầu hoá kinh tế là?",
        "options_raw": [
          "A. Tài nguyên ngày càng bị cạn kiệt",
          "*B. Gia tăng nhanh chóng khoảng cách giàu nghèo",
          "C. Các giá trị đạo đức có nguy cơ bị xói mòn",
          "D. Môi trường ngày càng bị ô nhiễm"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tài nguyên ngày càng bị cạn kiệt"
          },
          {
            "letter": "B",
            "text": "Gia tăng nhanh chóng khoảng cách giàu nghèo"
          },
          {
            "letter": "C",
            "text": "Các giá trị đạo đức có nguy cơ bị xói mòn"
          },
          {
            "letter": "D",
            "text": "Môi trường ngày càng bị ô nhiễm"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Gia tăng nhanh chóng khoảng cách giàu nghèo"
      },
      {
        "q_num": 24,
        "orig_id": 60,
        "title_raw": "Câu 24.[!b:$ Chọn các ý không đúng về sản phẩm và hàng hoá:$]",
        "clean_text": "Chọn các ý không đúng về sản phẩm và hàng hoá:",
        "options_raw": [
          "A. Mọi sản phẩm đều là kết quả của sản xuất",
          "B. Mọi hàng hoá đều là sản phẩm",
          "*C. Mọi sản phẩm đều là hàng hoá",
          "D. Không phải mọi sản phẩm đều là hàng hoá"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Mọi sản phẩm đều là kết quả của sản xuất"
          },
          {
            "letter": "B",
            "text": "Mọi hàng hoá đều là sản phẩm"
          },
          {
            "letter": "C",
            "text": "Mọi sản phẩm đều là hàng hoá"
          },
          {
            "letter": "D",
            "text": "Không phải mọi sản phẩm đều là hàng hoá"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Mọi sản phẩm đều là hàng hoá"
      },
      {
        "q_num": 25,
        "orig_id": 89,
        "title_raw": "Câu 25.[!b:$ Mục đích cạnh tranh trong nội bộ tổ chức độc quyền là?$]",
        "clean_text": "Mục đích cạnh tranh trong nội bộ tổ chức độc quyền là?",
        "options_raw": [
          "A. Đảm bảo công bằng về lợi nhuận",
          "*B. Giành thị phần và tỷ lệ sản xuất cao hơn",
          "C. Hướng đến hợp tác cùng nhau",
          "D. Thôn tính nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đảm bảo công bằng về lợi nhuận"
          },
          {
            "letter": "B",
            "text": "Giành thị phần và tỷ lệ sản xuất cao hơn"
          },
          {
            "letter": "C",
            "text": "Hướng đến hợp tác cùng nhau"
          },
          {
            "letter": "D",
            "text": "Thôn tính nhau"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Giành thị phần và tỷ lệ sản xuất cao hơn"
      },
      {
        "q_num": 26,
        "orig_id": 131,
        "title_raw": "Câu 26.[!b:$ Thế nào là lao động phức tạp:$]",
        "clean_text": "Thế nào là lao động phức tạp:",
        "options_raw": [
          "A. Là lao động tri thức ở các nước có trình độ phát triển cao về kinh tế - xã hội",
          "B. Là lao động tạo ra các sản phẩm chất lượng cao, tinh vi với giá cả cao",
          "C. Là lao động có nhiều thao tác phức tạp",
          "*D. Là lao động phải trải qua đào tạo, huấn luyện mới làm được"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là lao động tri thức ở các nước có trình độ phát triển cao về kinh tế - xã hội"
          },
          {
            "letter": "B",
            "text": "Là lao động tạo ra các sản phẩm chất lượng cao, tinh vi với giá cả cao"
          },
          {
            "letter": "C",
            "text": "Là lao động có nhiều thao tác phức tạp"
          },
          {
            "letter": "D",
            "text": "Là lao động phải trải qua đào tạo, huấn luyện mới làm được"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Là lao động phải trải qua đào tạo, huấn luyện mới làm được"
      },
      {
        "q_num": 27,
        "orig_id": 99,
        "title_raw": "Câu 27.[!b:$ Sự phân chia tư bản thành tư bản bất biến và tư bản khả biến để chỉ rõ$]",
        "clean_text": "Sự phân chia tư bản thành tư bản bất biến và tư bản khả biến để chỉ rõ",
        "options_raw": [
          "*A. Nguồn gốc của giá trị thặng dư",
          "B. Đặc điểm chuyển giá trị của từng loại tư bản vào sản phẩm",
          "C. Vai trò của lao động quá khứ và lao động sống trong việc tạo ra giá trị sử dụng",
          "D. Phương thức chu chuyển của tư bản vào giá trị sản phẩm mới"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguồn gốc của giá trị thặng dư"
          },
          {
            "letter": "B",
            "text": "Đặc điểm chuyển giá trị của từng loại tư bản vào sản phẩm"
          },
          {
            "letter": "C",
            "text": "Vai trò của lao động quá khứ và lao động sống trong việc tạo ra giá trị sử dụng"
          },
          {
            "letter": "D",
            "text": "Phương thức chu chuyển của tư bản vào giá trị sản phẩm mới"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Nguồn gốc của giá trị thặng dư"
      },
      {
        "q_num": 28,
        "orig_id": 47,
        "title_raw": "Câu 28.[!b:$ Sức lao động trở thành hàng hoá một cách phổ biến từ khi nào?$]",
        "clean_text": "Sức lao động trở thành hàng hoá một cách phổ biến từ khi nào?",
        "options_raw": [
          "A. Từ khi có kinh tế thị trường",
          "B. Từ khi có sản xuất hàng hoá",
          "*C. Từ khi có CNTB",
          "D. Từ xã hội chiếm hữu nô lệ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Từ khi có kinh tế thị trường"
          },
          {
            "letter": "B",
            "text": "Từ khi có sản xuất hàng hoá"
          },
          {
            "letter": "C",
            "text": "Từ khi có CNTB"
          },
          {
            "letter": "D",
            "text": "Từ xã hội chiếm hữu nô lệ"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Từ khi có CNTB"
      },
      {
        "q_num": 29,
        "orig_id": 63,
        "title_raw": "Câu 29.[!b:$ Nhận xét đúng nhất về vai trò của các công ty xuyên quốc gia trong nền kinh tế thế giới?$]",
        "clean_text": "Nhận xét đúng nhất về vai trò của các công ty xuyên quốc gia trong nền kinh tế thế giới?",
        "options_raw": [
          "A. Nắm trong tay nguồn của cải vật chất khá lớn và chi phối một số ngành kinh tế quan trọng",
          "B. Nắm trong tay nguồn của cải vật chất lớn và quyết định sự phát triển của một số ngành kinh tế quan trọng",
          "*C. Nắm trong tay nguồn của cải vật chất rất lớn và chi phối nhiều ngành kinh tế quan trọng trên thế giới",
          "D. Nắm trong tay nguồn của cải vật chất nhỏ và chi phối nhiều ngành kinh tế quan trọng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nắm trong tay nguồn của cải vật chất khá lớn và chi phối một số ngành kinh tế quan trọng"
          },
          {
            "letter": "B",
            "text": "Nắm trong tay nguồn của cải vật chất lớn và quyết định sự phát triển của một số ngành kinh tế quan trọng"
          },
          {
            "letter": "C",
            "text": "Nắm trong tay nguồn của cải vật chất rất lớn và chi phối nhiều ngành kinh tế quan trọng trên thế giới"
          },
          {
            "letter": "D",
            "text": "Nắm trong tay nguồn của cải vật chất nhỏ và chi phối nhiều ngành kinh tế quan trọng"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Nắm trong tay nguồn của cải vật chất rất lớn và chi phối nhiều ngành kinh tế quan trọng trên thế giới"
      },
      {
        "q_num": 30,
        "orig_id": 192,
        "title_raw": "Câu 30.[!b:$ Lao động trừu tượng là?$]",
        "clean_text": "Lao động trừu tượng là?",
        "options_raw": [
          "*A. Là phạm trù của mọi nền kinh tế hàng hoá",
          "B. Là phạm trù chung của mọi nền kinh tế",
          "C. Là phạm trù riêng của CNTB",
          "D. Là phạm trù riêng của kinh tế thị trường"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là phạm trù của mọi nền kinh tế hàng hoá"
          },
          {
            "letter": "B",
            "text": "Là phạm trù chung của mọi nền kinh tế"
          },
          {
            "letter": "C",
            "text": "Là phạm trù riêng của CNTB"
          },
          {
            "letter": "D",
            "text": "Là phạm trù riêng của kinh tế thị trường"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Là phạm trù của mọi nền kinh tế hàng hoá"
      }
    ]
  },
  {
    "test_num": 4,
    "title": "Đề trắc nghiệm số 4",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 117,
        "title_raw": "Câu 1.[!b:$ Quy luật giá trị tồn tại ở đâu:$]",
        "clean_text": "Quy luật giá trị tồn tại ở đâu:",
        "options_raw": [
          "A. Trong nền sản xuất hàng hoá giản đơn",
          "*B. Trong mọi nền kinh tế hàng hoá",
          "C. Trong nền sản xuất vật chất nói chung",
          "D. Nền sản xuất TBCN"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Trong nền sản xuất hàng hoá giản đơn"
          },
          {
            "letter": "B",
            "text": "Trong mọi nền kinh tế hàng hoá"
          },
          {
            "letter": "C",
            "text": "Trong nền sản xuất vật chất nói chung"
          },
          {
            "letter": "D",
            "text": "Nền sản xuất TBCN"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Trong mọi nền kinh tế hàng hoá"
      },
      {
        "q_num": 2,
        "orig_id": 77,
        "title_raw": "Câu 2.[!b:$ Trong TKQĐ ở nước ta sở hữu tư nhân?$]",
        "clean_text": "Trong TKQĐ ở nước ta sở hữu tư nhân?",
        "options_raw": [
          "*A. Tồn tại đan xen với các hình thức sở hữu khác",
          "B. Bị xoá bỏ",
          "C. Là hình thức sở hữu thống trị",
          "D. Bị hạn chế"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tồn tại đan xen với các hình thức sở hữu khác"
          },
          {
            "letter": "B",
            "text": "Bị xoá bỏ"
          },
          {
            "letter": "C",
            "text": "Là hình thức sở hữu thống trị"
          },
          {
            "letter": "D",
            "text": "Bị hạn chế"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tồn tại đan xen với các hình thức sở hữu khác"
      },
      {
        "q_num": 3,
        "orig_id": 84,
        "title_raw": "Câu 3.[!b:$ Trong giai đoạn CNTB độc quyền, quy luật giá trị thặng dư biểu hiện thành:$]",
        "clean_text": "Trong giai đoạn CNTB độc quyền, quy luật giá trị thặng dư biểu hiện thành:",
        "options_raw": [
          "*A. Quy luật lợi nhuận độc quyền cao",
          "B. Quy luật lợi nhuận bình quân cho các nhà tư bản",
          "C. Quy luật giá cả độc quyền",
          "D. Quy luật giá cả sản xuất cho nền sản xuất TBCN"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật lợi nhuận độc quyền cao"
          },
          {
            "letter": "B",
            "text": "Quy luật lợi nhuận bình quân cho các nhà tư bản"
          },
          {
            "letter": "C",
            "text": "Quy luật giá cả độc quyền"
          },
          {
            "letter": "D",
            "text": "Quy luật giá cả sản xuất cho nền sản xuất TBCN"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Quy luật lợi nhuận độc quyền cao"
      },
      {
        "q_num": 4,
        "orig_id": 165,
        "title_raw": "Câu 4.[!b:$ Phương thức sản xuất TBCN có những giai đoạn nào?$]",
        "clean_text": "Phương thức sản xuất TBCN có những giai đoạn nào?",
        "options_raw": [
          "A. CNTB ngày nay và CNTB độc quyền",
          "B. CNTB hiện đại và CNTB tự do cạnh tranh",
          "C. CNTB hiện đại và CNTB độc quyền",
          "*D. CNTB tự do cạnh tranh và CNTB độc quyền"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "CNTB ngày nay và CNTB độc quyền"
          },
          {
            "letter": "B",
            "text": "CNTB hiện đại và CNTB tự do cạnh tranh"
          },
          {
            "letter": "C",
            "text": "CNTB hiện đại và CNTB độc quyền"
          },
          {
            "letter": "D",
            "text": "CNTB tự do cạnh tranh và CNTB độc quyền"
          }
        ],
        "correct_letter": "D",
        "correct_text": "CNTB tự do cạnh tranh và CNTB độc quyền"
      },
      {
        "q_num": 5,
        "orig_id": 5,
        "title_raw": "Câu 5.[!b:$ “Ngoại giao cây Tre” được hiểu là?$]",
        "clean_text": "“Ngoại giao cây Tre” được hiểu là?",
        "options_raw": [
          "A. Cứng cỏi và vững chãi, nhân ái mà quật cường, biết nhu biết cương, biết thời biết thế, biết mình biết người... thể hiện tâm hồn và khí phách của dân tộc Việt Nam",
          "B. Mềm mại mà cứng cỏi, nhân ái mà quật cường, biết nhu biết cương, biết thời biết thế, biết người biết ta... thể hiện tâm hồn và khí phách của dân tộc Việt Nam",
          "C. Mềm mại mà cứng cỏi, biết nhu biết cương, biết tiến biết thoái, biết thời biết thế, biết mình biết người... thể hiện tâm hồn và khí phách của dân tộc Việt Nam",
          "*D. Mềm mại mà cứng cỏi, nhân ái mà quật cường, biết nhu biết cương, biết thời biết thế, biết mình biết người... thể hiện tâm hồn và khí phách của dân tộc Việt Nam"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cứng cỏi và vững chãi, nhân ái mà quật cường, biết nhu biết cương, biết thời biết thế, biết mình biết người... thể hiện tâm hồn và khí phách của dân tộc Việt Nam"
          },
          {
            "letter": "B",
            "text": "Mềm mại mà cứng cỏi, nhân ái mà quật cường, biết nhu biết cương, biết thời biết thế, biết người biết ta... thể hiện tâm hồn và khí phách của dân tộc Việt Nam"
          },
          {
            "letter": "C",
            "text": "Mềm mại mà cứng cỏi, biết nhu biết cương, biết tiến biết thoái, biết thời biết thế, biết mình biết người... thể hiện tâm hồn và khí phách của dân tộc Việt Nam"
          },
          {
            "letter": "D",
            "text": "Mềm mại mà cứng cỏi, nhân ái mà quật cường, biết nhu biết cương, biết thời biết thế, biết mình biết người... thể hiện tâm hồn và khí phách của dân tộc Việt Nam"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Mềm mại mà cứng cỏi, nhân ái mà quật cường, biết nhu biết cương, biết thời biết thế, biết mình biết người... thể hiện tâm hồn và khí phách của dân tộc Việt Nam"
      },
      {
        "q_num": 6,
        "orig_id": 2,
        "title_raw": "Câu 6.[!b:$ Phân công lao động xã hội và phân công lao động quốc tế là:$]",
        "clean_text": "Phân công lao động xã hội và phân công lao động quốc tế là:",
        "options_raw": [
          "A. Hai khái niệm giống nhau hoàn toàn",
          "B. Các phương án đều sai",
          "*C. Hai khái niệm giống nhau về bản chất, khác nhau về phạm vi",
          "D. Hai khái niệm khác nhau về nội dung"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hai khái niệm giống nhau hoàn toàn"
          },
          {
            "letter": "B",
            "text": "Các phương án đều sai"
          },
          {
            "letter": "C",
            "text": "Hai khái niệm giống nhau về bản chất, khác nhau về phạm vi"
          },
          {
            "letter": "D",
            "text": "Hai khái niệm khác nhau về nội dung"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Hai khái niệm giống nhau về bản chất, khác nhau về phạm vi"
      },
      {
        "q_num": 7,
        "orig_id": 35,
        "title_raw": "Câu 7.[!b:$ Sự phát triển đại công nghiệp cơ khí ở Anh bắt đầu từ:$]",
        "clean_text": "Sự phát triển đại công nghiệp cơ khí ở Anh bắt đầu từ:",
        "options_raw": [
          "A. Các ngành công nghiệp chế tạo máy",
          "B. Các ngành sản xuất máy động lực",
          "*C. Các ngành công nghiệp nhẹ",
          "D. Các ngành công nghiệp nặng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Các ngành công nghiệp chế tạo máy"
          },
          {
            "letter": "B",
            "text": "Các ngành sản xuất máy động lực"
          },
          {
            "letter": "C",
            "text": "Các ngành công nghiệp nhẹ"
          },
          {
            "letter": "D",
            "text": "Các ngành công nghiệp nặng"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Các ngành công nghiệp nhẹ"
      },
      {
        "q_num": 8,
        "orig_id": 38,
        "title_raw": "Câu 8.[!b:$ Các luận điểm dưới đây, luận điểm nào sai?$]",
        "clean_text": "Các luận điểm dưới đây, luận điểm nào sai?",
        "options_raw": [
          "A. Sản xuất giá trị thặng dư tuyệt đối là hình thái chung nhất của sản xuất giá trị thặng dư",
          "*B. Bóc lột sản phẩm thặng dư chỉ có ở CNTB",
          "C. Sản xuất giá trị thặng dư tuyệt đối là điểm xuất phát để sản xuất giá trị thặng dư tương đối",
          "D. Các phương thức sản xuất trước CNTB bóc lột sản phẩm thặng dư trực tiếp"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sản xuất giá trị thặng dư tuyệt đối là hình thái chung nhất của sản xuất giá trị thặng dư"
          },
          {
            "letter": "B",
            "text": "Bóc lột sản phẩm thặng dư chỉ có ở CNTB"
          },
          {
            "letter": "C",
            "text": "Sản xuất giá trị thặng dư tuyệt đối là điểm xuất phát để sản xuất giá trị thặng dư tương đối"
          },
          {
            "letter": "D",
            "text": "Các phương thức sản xuất trước CNTB bóc lột sản phẩm thặng dư trực tiếp"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Bóc lột sản phẩm thặng dư chỉ có ở CNTB"
      },
      {
        "q_num": 9,
        "orig_id": 178,
        "title_raw": "Câu 9.[!b:$ Tỷ suất giá trị thặng dư (m&#39;) phản ánh điều gì? Chọn ý đúng:$]",
        "clean_text": "Tỷ suất giá trị thặng dư (m') phản ánh điều gì? Chọn ý đúng:",
        "options_raw": [
          "A. Tất cả các phương án",
          "B. Hiệu quả của tư bản",
          "*C. Trình độ bóc lột của tư bản đối với công nhân làm thuê",
          "D. Chỉ cho nhà tư bản biết nơi đầu tư có lợi"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Hiệu quả của tư bản"
          },
          {
            "letter": "C",
            "text": "Trình độ bóc lột của tư bản đối với công nhân làm thuê"
          },
          {
            "letter": "D",
            "text": "Chỉ cho nhà tư bản biết nơi đầu tư có lợi"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Trình độ bóc lột của tư bản đối với công nhân làm thuê"
      },
      {
        "q_num": 10,
        "orig_id": 56,
        "title_raw": "Câu 10.[!b:$ Ý nào sau đây là ý không đúng về lao động phức tạp:$]",
        "clean_text": "Ý nào sau đây là ý không đúng về lao động phức tạp:",
        "options_raw": [
          "A. cao",
          "B. Lao động phức tạp là lao động giản đơn nhân bội lên",
          "C. Trong cùng một thời gian lao động, lao động phức tạp tạo ra nhiều E. giá trị hơn lao động giản đơn F. Lao động phức tạp là lao động trải qua đào tạo, huấn luyện",
          "*D. Lao động phức tạp là lao động trí tuệ của người lao động có trình độ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "cao"
          },
          {
            "letter": "B",
            "text": "Lao động phức tạp là lao động giản đơn nhân bội lên"
          },
          {
            "letter": "C",
            "text": "Trong cùng một thời gian lao động, lao động phức tạp tạo ra nhiều E. giá trị hơn lao động giản đơn F. Lao động phức tạp là lao động trải qua đào tạo, huấn luyện"
          },
          {
            "letter": "D",
            "text": "Lao động phức tạp là lao động trí tuệ của người lao động có trình độ"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Lao động phức tạp là lao động trí tuệ của người lao động có trình độ"
      },
      {
        "q_num": 11,
        "orig_id": 145,
        "title_raw": "Câu 11.[!b:$ Trong quan hệ kinh tế đối ngoại phải dựa trên nguyên tắc bình đẳng. Hiểu thế nào là đúng về nguyên tắc bình đẳng?$]",
        "clean_text": "Trong quan hệ kinh tế đối ngoại phải dựa trên nguyên tắc bình đẳng. Hiểu thế nào là đúng về nguyên tắc bình đẳng?",
        "options_raw": [
          "A. Là quan hệ giữa các quốc gia độc lập có chủ quyền",
          "B. Không phân biệt nước giàu, nước nghèo.",
          "C. Có quyền như nhau trong tự do kinh doanh, tự chủ kinh tế.",
          "*D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là quan hệ giữa các quốc gia độc lập có chủ quyền"
          },
          {
            "letter": "B",
            "text": "Không phân biệt nước giàu, nước nghèo."
          },
          {
            "letter": "C",
            "text": "Có quyền như nhau trong tự do kinh doanh, tự chủ kinh tế."
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 12,
        "orig_id": 125,
        "title_raw": "Câu 12.[!b:$ Thế nào là tăng NSLĐ?$]",
        "clean_text": "Thế nào là tăng NSLĐ?",
        "options_raw": [
          "*A. Tất cả các đáp án",
          "B. Thời gian để làm ra một sản phẩm giảm xuống, khi các điều kiện khác không đổi",
          "C. Tổng số sản phẩm làm ra trong một đơn vị thời gian tăng lên còn tổng số giá trị không thay đổi",
          "D. Số sản phẩm làm ra trong một đơn vị thời gian tăng lên khi các điều khác không đổi"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "B",
            "text": "Thời gian để làm ra một sản phẩm giảm xuống, khi các điều kiện khác không đổi"
          },
          {
            "letter": "C",
            "text": "Tổng số sản phẩm làm ra trong một đơn vị thời gian tăng lên còn tổng số giá trị không thay đổi"
          },
          {
            "letter": "D",
            "text": "Số sản phẩm làm ra trong một đơn vị thời gian tăng lên khi các điều khác không đổi"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 13,
        "orig_id": 157,
        "title_raw": "Câu 13.[!b:$ Mục đích của xuất khẩu tư bản là?$]",
        "clean_text": "Mục đích của xuất khẩu tư bản là?",
        "options_raw": [
          "A. Thực hiện giá trị và chiếm các nguồn lợi khác của nước nhập khẩu tư bản",
          "*B. Chiếm đoạt giá trị thặng dư và các nguồn lợi khác ở nước nhập khẩu tư bản",
          "C. Giúp đỡ các nước nhập khẩu tư bản phát triển",
          "D. Để giải quyết nguồn tư bản &quot;thừa&quot; trong nước"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Thực hiện giá trị và chiếm các nguồn lợi khác của nước nhập khẩu tư bản"
          },
          {
            "letter": "B",
            "text": "Chiếm đoạt giá trị thặng dư và các nguồn lợi khác ở nước nhập khẩu tư bản"
          },
          {
            "letter": "C",
            "text": "Giúp đỡ các nước nhập khẩu tư bản phát triển"
          },
          {
            "letter": "D",
            "text": "Để giải quyết nguồn tư bản \"thừa\" trong nước"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Chiếm đoạt giá trị thặng dư và các nguồn lợi khác ở nước nhập khẩu tư bản"
      },
      {
        "q_num": 14,
        "orig_id": 170,
        "title_raw": "Câu 14.[!b:$ Sản xuất giá trị thặng dư là quy luật kinh tế tuyệt đối của CNTB; Quy luật này có vai trò thế nào? Chọn ý đúng dưới đây:$]",
        "clean_text": "Sản xuất giá trị thặng dư là quy luật kinh tế tuyệt đối của CNTB; Quy luật này có vai trò thế nào? Chọn ý đúng dưới đây:",
        "options_raw": [
          "A. Quy định sự vận động của CNTB",
          "B. Động lực phát triển của CNTB",
          "C. Là nguyên nhân của các mâu thuẫn cơ bản của CNTB",
          "*D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy định sự vận động của CNTB"
          },
          {
            "letter": "B",
            "text": "Động lực phát triển của CNTB"
          },
          {
            "letter": "C",
            "text": "Là nguyên nhân của các mâu thuẫn cơ bản của CNTB"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 15,
        "orig_id": 83,
        "title_raw": "Câu 15.[!b:$ Nguồn gốc của lợi nhuận độc quyền cao là?$]",
        "clean_text": "Nguồn gốc của lợi nhuận độc quyền cao là?",
        "options_raw": [
          "*A. Tất cả các đáp án",
          "B. Lao động không công của công nhân trong xí nghiệp độc quyền",
          "C. Phần giá trị thặng dư của các xí nghiệp tư bản vừa, nhỏ",
          "D. Phần lao động không công của công nhân trong xí nghiệp ngoài độc quyền."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "B",
            "text": "Lao động không công của công nhân trong xí nghiệp độc quyền"
          },
          {
            "letter": "C",
            "text": "Phần giá trị thặng dư của các xí nghiệp tư bản vừa, nhỏ"
          },
          {
            "letter": "D",
            "text": "Phần lao động không công của công nhân trong xí nghiệp ngoài độc quyền."
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 16,
        "orig_id": 189,
        "title_raw": "Câu 16.[!b:$ Tính chất hai mặt của lao động sản xuất hàng hoá là:$]",
        "clean_text": "Tính chất hai mặt của lao động sản xuất hàng hoá là:",
        "options_raw": [
          "A. Lao động quá khứ và hiện hữu",
          "B. Lao động giản đơn và lao động phức tạp",
          "*C. Lao động tư nhân và lao động xã hội",
          "D. Lao động cụ thể và lao động trừu tượng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lao động quá khứ và hiện hữu"
          },
          {
            "letter": "B",
            "text": "Lao động giản đơn và lao động phức tạp"
          },
          {
            "letter": "C",
            "text": "Lao động tư nhân và lao động xã hội"
          },
          {
            "letter": "D",
            "text": "Lao động cụ thể và lao động trừu tượng"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Lao động tư nhân và lao động xã hội"
      },
      {
        "q_num": 17,
        "orig_id": 71,
        "title_raw": "Câu 17.[!b:$ Trong quan hệ kinh tế đối ngoại, việc &quot;đảm bảo ổn định về môi trường chính trị, kinh tế xã hội&quot; là?$]",
        "clean_text": "Trong quan hệ kinh tế đối ngoại, việc \"đảm bảo ổn định về môi trường chính trị, kinh tế xã hội\" là?",
        "options_raw": [
          "A. Điều kiện để thu hút vốn đầu tư nước ngoài",
          "*B. Giải pháp chủ yếu nhằm mở rộng, nâng cao hiệu quả kinh tế đối ngoại",
          "C. Để thu hút khách du lịch nước ngoài",
          "D. Để phát triển kinh tế tư bản nhà nước"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Điều kiện để thu hút vốn đầu tư nước ngoài"
          },
          {
            "letter": "B",
            "text": "Giải pháp chủ yếu nhằm mở rộng, nâng cao hiệu quả kinh tế đối ngoại"
          },
          {
            "letter": "C",
            "text": "Để thu hút khách du lịch nước ngoài"
          },
          {
            "letter": "D",
            "text": "Để phát triển kinh tế tư bản nhà nước"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Giải pháp chủ yếu nhằm mở rộng, nâng cao hiệu quả kinh tế đối ngoại"
      },
      {
        "q_num": 18,
        "orig_id": 40,
        "title_raw": "Câu 18.[!b:$ Tiền công tính theo thời gian và tiền công tính theo sản phẩm có quan hệ với nhau thế nào?$]",
        "clean_text": "Tiền công tính theo thời gian và tiền công tính theo sản phẩm có quan hệ với nhau thế nào?",
        "options_raw": [
          "A. tính theo thời gian.",
          "*B. Tiền công tính theo sản phẩm là hình thức chuyển hoá của tiền công",
          "C. khác nhau. E. Trả công theo sản phẩm dễ quản lý hơn trả công theo thời gian. F. Không có quan hệ gì",
          "D. Hai hình thức tiền công áp dụng cho các loại công việc có đặc điểm"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "tính theo thời gian."
          },
          {
            "letter": "B",
            "text": "Tiền công tính theo sản phẩm là hình thức chuyển hoá của tiền công"
          },
          {
            "letter": "C",
            "text": "khác nhau. E. Trả công theo sản phẩm dễ quản lý hơn trả công theo thời gian. F. Không có quan hệ gì"
          },
          {
            "letter": "D",
            "text": "Hai hình thức tiền công áp dụng cho các loại công việc có đặc điểm"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tiền công tính theo sản phẩm là hình thức chuyển hoá của tiền công"
      },
      {
        "q_num": 19,
        "orig_id": 86,
        "title_raw": "Câu 19.[!b:$ Các tổ chức độc quyền sử dụng giá cả độc quyền để:$]",
        "clean_text": "Các tổ chức độc quyền sử dụng giá cả độc quyền để:",
        "options_raw": [
          "A. Chiếm đoạt giá trị thặng dư của người khác",
          "*B. Củng cố vai trò tổ chức độc quyền",
          "C. Gây thiệt hại cho các đối thủ cạnh tranh",
          "D. Khống chế thị trường"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Chiếm đoạt giá trị thặng dư của người khác"
          },
          {
            "letter": "B",
            "text": "Củng cố vai trò tổ chức độc quyền"
          },
          {
            "letter": "C",
            "text": "Gây thiệt hại cho các đối thủ cạnh tranh"
          },
          {
            "letter": "D",
            "text": "Khống chế thị trường"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Củng cố vai trò tổ chức độc quyền"
      },
      {
        "q_num": 20,
        "orig_id": 52,
        "title_raw": "Câu 20.[!b:$ Công thức tính giá trị hàng hoá là: c + v + m. Ý nào là không đúng trong các ý sau:$]",
        "clean_text": "Công thức tính giá trị hàng hoá là: c + v + m. Ý nào là không đúng trong các ý sau:",
        "options_raw": [
          "*A. Lao động trừu tượng tạo nên toàn bộ giá trị (c + v + m)",
          "B. Tất cả các đáp án",
          "C. Lao động cụ thể bảo toàn và chuyển giá trị TLSX (c) sang sản phẩm",
          "D. Lao động trừu tượng tạo ra giá trị mới (v+m)"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lao động trừu tượng tạo nên toàn bộ giá trị (c + v + m)"
          },
          {
            "letter": "B",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "C",
            "text": "Lao động cụ thể bảo toàn và chuyển giá trị TLSX (c) sang sản phẩm"
          },
          {
            "letter": "D",
            "text": "Lao động trừu tượng tạo ra giá trị mới (v+m)"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Lao động trừu tượng tạo nên toàn bộ giá trị (c + v + m)"
      },
      {
        "q_num": 21,
        "orig_id": 72,
        "title_raw": "Câu 21.[!b:$ Đa phương hoá, đa dạng hoá được hiểu là?$]",
        "clean_text": "Đa phương hoá, đa dạng hoá được hiểu là?",
        "options_raw": [
          "A. Quan hệ với tất cả quốc gia, các tổ chức kinh tế quốc tế không phân biệt thể chế chính trị",
          "B. Quan hệ với tất cả quốc gia, các tổ chức kinh tế quốc tế, đẩy mạnh hợp tác đa phương và song phương",
          "C. Quan hệ với các quốc gia, các tổ chức kinh tế quốc tế có cùng thể chế chính trị, dưới nhiều hình thức khác nhau",
          "*D. Quan hệ với tất cả quốc gia, các tổ chức kinh tế quốc tế không phân biệt thể chế chính trị với nhiều hình thức kinh tế đối ngoại khác nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan hệ với tất cả quốc gia, các tổ chức kinh tế quốc tế không phân biệt thể chế chính trị"
          },
          {
            "letter": "B",
            "text": "Quan hệ với tất cả quốc gia, các tổ chức kinh tế quốc tế, đẩy mạnh hợp tác đa phương và song phương"
          },
          {
            "letter": "C",
            "text": "Quan hệ với các quốc gia, các tổ chức kinh tế quốc tế có cùng thể chế chính trị, dưới nhiều hình thức khác nhau"
          },
          {
            "letter": "D",
            "text": "Quan hệ với tất cả quốc gia, các tổ chức kinh tế quốc tế không phân biệt thể chế chính trị với nhiều hình thức kinh tế đối ngoại khác nhau"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Quan hệ với tất cả quốc gia, các tổ chức kinh tế quốc tế không phân biệt thể chế chính trị với nhiều hình thức kinh tế đối ngoại khác nhau"
      },
      {
        "q_num": 22,
        "orig_id": 33,
        "title_raw": "Câu 22.[!b:$ Tích tụ và tập trung tư bản giống nhau ở:$]",
        "clean_text": "Tích tụ và tập trung tư bản giống nhau ở:",
        "options_raw": [
          "A. Có vai trò quan trọng như nhau",
          "B. Đều là tăng quy mô tư bản xã hội",
          "*C. Đều là tăng quy mô tư bản cá biệt",
          "D. Có nguồn gốc trực tiếp giống nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Có vai trò quan trọng như nhau"
          },
          {
            "letter": "B",
            "text": "Đều là tăng quy mô tư bản xã hội"
          },
          {
            "letter": "C",
            "text": "Đều là tăng quy mô tư bản cá biệt"
          },
          {
            "letter": "D",
            "text": "Có nguồn gốc trực tiếp giống nhau"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Đều là tăng quy mô tư bản cá biệt"
      },
      {
        "q_num": 23,
        "orig_id": 70,
        "title_raw": "Câu 23.[!b:$ Toàn cầu hoá kinh tế và quốc tế hoá kinh tế?$]",
        "clean_text": "Toàn cầu hoá kinh tế và quốc tế hoá kinh tế?",
        "options_raw": [
          "A. Quốc tế hoá là khái niệm rộng hơn toàn cầu hoá",
          "*B. Toàn cầu hoá là khái niệm rộng hơn quốc tế hoá đời sống kinh tế",
          "C. Quốc tế hoá và toàn cầu hoá kinh tế giống nhau",
          "D. Toàn cầu hoá diễn ra trước quốc tế hoá đời sống kinh tế"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quốc tế hoá là khái niệm rộng hơn toàn cầu hoá"
          },
          {
            "letter": "B",
            "text": "Toàn cầu hoá là khái niệm rộng hơn quốc tế hoá đời sống kinh tế"
          },
          {
            "letter": "C",
            "text": "Quốc tế hoá và toàn cầu hoá kinh tế giống nhau"
          },
          {
            "letter": "D",
            "text": "Toàn cầu hoá diễn ra trước quốc tế hoá đời sống kinh tế"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Toàn cầu hoá là khái niệm rộng hơn quốc tế hoá đời sống kinh tế"
      },
      {
        "q_num": 24,
        "orig_id": 168,
        "title_raw": "Câu 24.[!b:$ Chọn các ý đúng về tư bản bất biến, tư bản khả biến, tư bản cố định, tư bản lưu động:$]",
        "clean_text": "Chọn các ý đúng về tư bản bất biến, tư bản khả biến, tư bản cố định, tư bản lưu động:",
        "options_raw": [
          "*A. Tất cả các phương án",
          "B. Tư bản cố định là một bộ phận của tư bản bất biến",
          "C. Tư bản khả biến là một bộ phận của tư bản lưu động.",
          "D. Tư bản bất biến không thay đổi về lượng trong quá trình sản xuất."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "B",
            "text": "Tư bản cố định là một bộ phận của tư bản bất biến"
          },
          {
            "letter": "C",
            "text": "Tư bản khả biến là một bộ phận của tư bản lưu động."
          },
          {
            "letter": "D",
            "text": "Tư bản bất biến không thay đổi về lượng trong quá trình sản xuất."
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 25,
        "orig_id": 127,
        "title_raw": "Câu 25.[!b:$ Lao động cụ thể là?$]",
        "clean_text": "Lao động cụ thể là?",
        "options_raw": [
          "A. Nguồn gốc của giá cả",
          "B. Nguồn gốc của giá trị",
          "C. Nguồn gốc của giá trị trao đổi",
          "*D. Nguồn gốc của mọi của cải trong xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nguồn gốc của giá cả"
          },
          {
            "letter": "B",
            "text": "Nguồn gốc của giá trị"
          },
          {
            "letter": "C",
            "text": "Nguồn gốc của giá trị trao đổi"
          },
          {
            "letter": "D",
            "text": "Nguồn gốc của mọi của cải trong xã hội"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Nguồn gốc của mọi của cải trong xã hội"
      },
      {
        "q_num": 26,
        "orig_id": 87,
        "title_raw": "Câu 26.[!b:$ Trong giai đoạn CNTB độc quyền$]",
        "clean_text": "Trong giai đoạn CNTB độc quyền",
        "options_raw": [
          "*A. Quy luật giá trị vẫn hoạt động",
          "B. Quy luật giá trị không còn hoạt động",
          "C. Quy luật giá trị lúc hoạt động, lúc không hoạt động",
          "D. Quy luật giá trị hoạt động kém hiệu quả"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật giá trị vẫn hoạt động"
          },
          {
            "letter": "B",
            "text": "Quy luật giá trị không còn hoạt động"
          },
          {
            "letter": "C",
            "text": "Quy luật giá trị lúc hoạt động, lúc không hoạt động"
          },
          {
            "letter": "D",
            "text": "Quy luật giá trị hoạt động kém hiệu quả"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Quy luật giá trị vẫn hoạt động"
      },
      {
        "q_num": 27,
        "orig_id": 59,
        "title_raw": "Câu 27.[!b:$ Lượng giá trị của đơn vị hàng hoá thay đổi:$]",
        "clean_text": "Lượng giá trị của đơn vị hàng hoá thay đổi:",
        "options_raw": [
          "A. lao động",
          "B. Tỷ lệ nghịch với cường độ lao động",
          "C. Tỷ lệ thuận với năng suất lao động E. Tỷ lệ thuận với năng suất lào động và cường độ lao động",
          "*D. Tỷ lệ nghịch với năng suất lao động, không phụ thuộc vào cường độ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "lao động"
          },
          {
            "letter": "B",
            "text": "Tỷ lệ nghịch với cường độ lao động"
          },
          {
            "letter": "C",
            "text": "Tỷ lệ thuận với năng suất lao động E. Tỷ lệ thuận với năng suất lào động và cường độ lao động"
          },
          {
            "letter": "D",
            "text": "Tỷ lệ nghịch với năng suất lao động, không phụ thuộc vào cường độ"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tỷ lệ nghịch với năng suất lao động, không phụ thuộc vào cường độ"
      },
      {
        "q_num": 28,
        "orig_id": 169,
        "title_raw": "Câu 28.[!b:$ Chi phí TBCN là$]",
        "clean_text": "Chi phí TBCN là",
        "options_raw": [
          "A. Tổng số tiền nhà tư bản ứng ra",
          "B. Số tiền nhà tư bản mua máy móc, nguyên vật liệu",
          "*C. Chi phí tư bản (c) và (v)",
          "D. Chi phí về TLSX và sức lao động"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tổng số tiền nhà tư bản ứng ra"
          },
          {
            "letter": "B",
            "text": "Số tiền nhà tư bản mua máy móc, nguyên vật liệu"
          },
          {
            "letter": "C",
            "text": "Chi phí tư bản (c) và (v)"
          },
          {
            "letter": "D",
            "text": "Chi phí về TLSX và sức lao động"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Chi phí tư bản (c) và (v)"
      },
      {
        "q_num": 29,
        "orig_id": 173,
        "title_raw": "Câu 29.[!b:$ Tư bản bất biến (c) và tư bản khả biến (v) có vai trò thế nào trong quá trình sản xuất giá trị thặng dư? Chọn các ý không đúng dưới đây:$]",
        "clean_text": "Tư bản bất biến (c) và tư bản khả biến (v) có vai trò thế nào trong quá trình sản xuất giá trị thặng dư? Chọn các ý không đúng dưới đây:",
        "options_raw": [
          "*A. Cả c và v có vai trò ngang nhau trong quá trình tạo ra giá trị thặng dư",
          "B. Tư bản khả biến là nguồn gốc của giá trị thặng dư",
          "C. Tư bản bất biến (c) là điều kiện để sản xuất giá trị thặng dư",
          "D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cả c và v có vai trò ngang nhau trong quá trình tạo ra giá trị thặng dư"
          },
          {
            "letter": "B",
            "text": "Tư bản khả biến là nguồn gốc của giá trị thặng dư"
          },
          {
            "letter": "C",
            "text": "Tư bản bất biến (c) là điều kiện để sản xuất giá trị thặng dư"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Cả c và v có vai trò ngang nhau trong quá trình tạo ra giá trị thặng dư"
      },
      {
        "q_num": 30,
        "orig_id": 16,
        "title_raw": "Câu 30.[!b:$ Xuất khẩu hàng hoá phát triển mạnh vào giai đoạn nào?$]",
        "clean_text": "Xuất khẩu hàng hoá phát triển mạnh vào giai đoạn nào?",
        "options_raw": [
          "A. Trong thế kỷ 18",
          "B. Từ cuối thế kỷ 17",
          "*C. Cuối thế kỷ 18 - thế kỷ 19",
          "D. Cuối thế kỷ 19 - đầu thế kỷ 20"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Trong thế kỷ 18"
          },
          {
            "letter": "B",
            "text": "Từ cuối thế kỷ 17"
          },
          {
            "letter": "C",
            "text": "Cuối thế kỷ 18 - thế kỷ 19"
          },
          {
            "letter": "D",
            "text": "Cuối thế kỷ 19 - đầu thế kỷ 20"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Cuối thế kỷ 18 - thế kỷ 19"
      }
    ]
  },
  {
    "test_num": 5,
    "title": "Đề trắc nghiệm số 5",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 124,
        "title_raw": "Câu 1.[!b:$ Quan hệ giữa tăng NSLĐ với giá trị hàng hoá? Chọn ý đúng:$]",
        "clean_text": "Quan hệ giữa tăng NSLĐ với giá trị hàng hoá? Chọn ý đúng:",
        "options_raw": [
          "*A. NSLĐ tăng lên thì lượng giá trị mới (v+m) của đơn vị hàng hoá giảm xuống tuyệt đối",
          "B. NSLĐ tăng lên thì giá trị đơn vị hàng hoá tăng",
          "C. Tất cả các đáp án đều sai",
          "D. NSLĐ tăng lên thì lượng giá trị mới (v+m) của đơn vị hàng hoá tăng tuyệt đối"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "NSLĐ tăng lên thì lượng giá trị mới (v+m) của đơn vị hàng hoá giảm xuống tuyệt đối"
          },
          {
            "letter": "B",
            "text": "NSLĐ tăng lên thì giá trị đơn vị hàng hoá tăng"
          },
          {
            "letter": "C",
            "text": "Tất cả các đáp án đều sai"
          },
          {
            "letter": "D",
            "text": "NSLĐ tăng lên thì lượng giá trị mới (v+m) của đơn vị hàng hoá tăng tuyệt đối"
          }
        ],
        "correct_letter": "A",
        "correct_text": "NSLĐ tăng lên thì lượng giá trị mới (v+m) của đơn vị hàng hoá giảm xuống tuyệt đối"
      },
      {
        "q_num": 2,
        "orig_id": 161,
        "title_raw": "Câu 2.[!b:$ Sự ra đời của tư bản tài chính là kết quả của?$]",
        "clean_text": "Sự ra đời của tư bản tài chính là kết quả của?",
        "options_raw": [
          "A. Sự phát triển của độc quyền công nghiệp",
          "*B. Quá trình xâm nhập liên kết độc quyền ngân hàng với độc quyền công nghiệp",
          "C. Sự phát triển của thị trường tài chính",
          "D. Sự ra đời của độc quyền ngân hàng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự phát triển của độc quyền công nghiệp"
          },
          {
            "letter": "B",
            "text": "Quá trình xâm nhập liên kết độc quyền ngân hàng với độc quyền công nghiệp"
          },
          {
            "letter": "C",
            "text": "Sự phát triển của thị trường tài chính"
          },
          {
            "letter": "D",
            "text": "Sự ra đời của độc quyền ngân hàng"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Quá trình xâm nhập liên kết độc quyền ngân hàng với độc quyền công nghiệp"
      },
      {
        "q_num": 3,
        "orig_id": 144,
        "title_raw": "Câu 3.[!b:$ Chủ trương trong quan hệ quốc tế của Việt Nam là?$]",
        "clean_text": "Chủ trương trong quan hệ quốc tế của Việt Nam là?",
        "options_raw": [
          "A. Việt Nam muốn là bạn, là đối tác của các nước trong cộng đồng quốc tế",
          "B. Việt Nam sẵn sàng là bạn tin cậy của các nước trong cộng đồng quốc tế",
          "*C. Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế",
          "D. Việt Nam sẵn sàng là bạn của các nước trong cộng đồng quốc tế."
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Việt Nam muốn là bạn, là đối tác của các nước trong cộng đồng quốc tế"
          },
          {
            "letter": "B",
            "text": "Việt Nam sẵn sàng là bạn tin cậy của các nước trong cộng đồng quốc tế"
          },
          {
            "letter": "C",
            "text": "Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế"
          },
          {
            "letter": "D",
            "text": "Việt Nam sẵn sàng là bạn của các nước trong cộng đồng quốc tế."
          }
        ],
        "correct_letter": "C",
        "correct_text": "Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế"
      },
      {
        "q_num": 4,
        "orig_id": 114,
        "title_raw": "Câu 4.[!b:$ Mục đích trực tiếp của nền sản xuất TBCN$]",
        "clean_text": "Mục đích trực tiếp của nền sản xuất TBCN",
        "options_raw": [
          "*A. Tạo ra ngày càng nhiều giá trị thặng dư",
          "B. Làm cho lao động ngày càng lệ thuộc vào tư bản",
          "C. Mở rộng phạm vi thống trị của QHSX TBCN",
          "D. Sản xuất ra ngày càng nhiều của cải vật chất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tạo ra ngày càng nhiều giá trị thặng dư"
          },
          {
            "letter": "B",
            "text": "Làm cho lao động ngày càng lệ thuộc vào tư bản"
          },
          {
            "letter": "C",
            "text": "Mở rộng phạm vi thống trị của QHSX TBCN"
          },
          {
            "letter": "D",
            "text": "Sản xuất ra ngày càng nhiều của cải vật chất"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tạo ra ngày càng nhiều giá trị thặng dư"
      },
      {
        "q_num": 5,
        "orig_id": 184,
        "title_raw": "Câu 5.[!b:$ Sản xuất và lưu thông hàng hoá chịu sự chi phối của những quy luật kinh tế cơ bản nào?$]",
        "clean_text": "Sản xuất và lưu thông hàng hoá chịu sự chi phối của những quy luật kinh tế cơ bản nào?",
        "options_raw": [
          "A. Quy luật lưu thông tiền tệ; Quy luật lợi nhuận bình quân; Quy luật độc quyền",
          "*B. Quy luật giá trị; Quy luật cạnh tranh; quy luật cung cầu; Quy luật lưu thông tiền tệ",
          "C. Quy luật giá trị; Quy luật lợi nhuận bình quân; Quy luật độc quyền",
          "D. Quy luật cung cầu; Quy luật lợi nhuận bình quân; Quy luật độc quyền"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật lưu thông tiền tệ; Quy luật lợi nhuận bình quân; Quy luật độc quyền"
          },
          {
            "letter": "B",
            "text": "Quy luật giá trị; Quy luật cạnh tranh; quy luật cung cầu; Quy luật lưu thông tiền tệ"
          },
          {
            "letter": "C",
            "text": "Quy luật giá trị; Quy luật lợi nhuận bình quân; Quy luật độc quyền"
          },
          {
            "letter": "D",
            "text": "Quy luật cung cầu; Quy luật lợi nhuận bình quân; Quy luật độc quyền"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Quy luật giá trị; Quy luật cạnh tranh; quy luật cung cầu; Quy luật lưu thông tiền tệ"
      },
      {
        "q_num": 6,
        "orig_id": 19,
        "title_raw": "Câu 6.[!b:$ Trong thời kỳ CNTB độc quyền:$]",
        "clean_text": "Trong thời kỳ CNTB độc quyền:",
        "options_raw": [
          "A. Mâu thuẫn giữa giai cấp tư sản và vô sản có phần dịu đi",
          "*B. Mâu thuẫn giữa giai cấp tư sản và vô sản ngày càng sâu sắc hơn",
          "C. Mâu thuẫn giữa giai cấp tư sản và vô sản không thay đổi",
          "D. Đời sống của giai cấp công nhân và nhân dân lao động dần dần được cải thiện hơn"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Mâu thuẫn giữa giai cấp tư sản và vô sản có phần dịu đi"
          },
          {
            "letter": "B",
            "text": "Mâu thuẫn giữa giai cấp tư sản và vô sản ngày càng sâu sắc hơn"
          },
          {
            "letter": "C",
            "text": "Mâu thuẫn giữa giai cấp tư sản và vô sản không thay đổi"
          },
          {
            "letter": "D",
            "text": "Đời sống của giai cấp công nhân và nhân dân lao động dần dần được cải thiện hơn"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Mâu thuẫn giữa giai cấp tư sản và vô sản ngày càng sâu sắc hơn"
      },
      {
        "q_num": 7,
        "orig_id": 61,
        "title_raw": "Câu 7.[!b:$ Mối quan hệ giữa xây dựng nền kinh tế độc lập tự chủ và chủ động hội nhập kinh tế quốc tế:$]",
        "clean_text": "Mối quan hệ giữa xây dựng nền kinh tế độc lập tự chủ và chủ động hội nhập kinh tế quốc tế:",
        "options_raw": [
          "A. Không có mối quan hệ với nhau",
          "B. Lấy độc lập tự chủ làm căn cốt, hội nhập kinh tế quốc tế là điều kiện hỗ trợ",
          "C. Lấy chủ động hội nhập kinh tế quốc tế là yếu tố cốt lõi nhằm đẩy nhanh quá trình xây dựng nền kinh tế độc lập tự chủ",
          "*D. Có mối quan hệ biện chứng với nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Không có mối quan hệ với nhau"
          },
          {
            "letter": "B",
            "text": "Lấy độc lập tự chủ làm căn cốt, hội nhập kinh tế quốc tế là điều kiện hỗ trợ"
          },
          {
            "letter": "C",
            "text": "Lấy chủ động hội nhập kinh tế quốc tế là yếu tố cốt lõi nhằm đẩy nhanh quá trình xây dựng nền kinh tế độc lập tự chủ"
          },
          {
            "letter": "D",
            "text": "Có mối quan hệ biện chứng với nhau"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Có mối quan hệ biện chứng với nhau"
      },
      {
        "q_num": 8,
        "orig_id": 110,
        "title_raw": "Câu 8.[!b:$ Trong quá trình sản xuất giá trị thặng dư, giá trị TLSX đã tiêu dùng sẽ như thế nào?$]",
        "clean_text": "Trong quá trình sản xuất giá trị thặng dư, giá trị TLSX đã tiêu dùng sẽ như thế nào?",
        "options_raw": [
          "A. Được tái sản xuất",
          "*B. Được lao động cụ thể của người sản xuất hàng hoá bảo tồn và chuyển vào giá trị của sản phẩm mới",
          "C. Được bù đắp",
          "D. Không được tái sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Được tái sản xuất"
          },
          {
            "letter": "B",
            "text": "Được lao động cụ thể của người sản xuất hàng hoá bảo tồn và chuyển vào giá trị của sản phẩm mới"
          },
          {
            "letter": "C",
            "text": "Được bù đắp"
          },
          {
            "letter": "D",
            "text": "Không được tái sản xuất"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Được lao động cụ thể của người sản xuất hàng hoá bảo tồn và chuyển vào giá trị của sản phẩm mới"
      },
      {
        "q_num": 9,
        "orig_id": 195,
        "title_raw": "Câu 9.[!b:$ Quy luật giá trị có mấy tác dụng?$]",
        "clean_text": "Quy luật giá trị có mấy tác dụng?",
        "options_raw": [
          "A. 4",
          "B. 2",
          "*C. 3",
          "D. 5"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "4"
          },
          {
            "letter": "B",
            "text": "2"
          },
          {
            "letter": "C",
            "text": "3"
          },
          {
            "letter": "D",
            "text": "5"
          }
        ],
        "correct_letter": "C",
        "correct_text": "3"
      },
      {
        "q_num": 10,
        "orig_id": 13,
        "title_raw": "Câu 10.[!b:$ Chọn các ý sai về quan hệ giá cả độc quyền với giá trị:$]",
        "clean_text": "Chọn các ý sai về quan hệ giá cả độc quyền với giá trị:",
        "options_raw": [
          "A. Giá cả độc quyền thấp &lt; giá trị",
          "B. Giá cả độc quyền vẫn dựa trên cơ sở giá trị",
          "C. Giá cả độc quyền cao &gt; giá trị",
          "*D. Giá cả độc quyền thoát ly giá trị"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giá cả độc quyền thấp < giá trị"
          },
          {
            "letter": "B",
            "text": "Giá cả độc quyền vẫn dựa trên cơ sở giá trị"
          },
          {
            "letter": "C",
            "text": "Giá cả độc quyền cao > giá trị"
          },
          {
            "letter": "D",
            "text": "Giá cả độc quyền thoát ly giá trị"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Giá cả độc quyền thoát ly giá trị"
      },
      {
        "q_num": 11,
        "orig_id": 34,
        "title_raw": "Câu 11.[!b:$ Để có thể tăng quy mô tích luỹ, các nhà tư bản sử dụng nhiều biện pháp. Biện pháp nào đúng?$]",
        "clean_text": "Để có thể tăng quy mô tích luỹ, các nhà tư bản sử dụng nhiều biện pháp. Biện pháp nào đúng?",
        "options_raw": [
          "A. Giảm m’; Giảm v, Tăng NSLĐ",
          "B. Giảm m’; Giảm v; Tăng NSLĐ",
          "*C. Tăng m&#39;; Giảm v; Tăng NSLĐ",
          "D. Tăng m’; Tăng v; Tăng NSLĐ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giảm m’; Giảm v, Tăng NSLĐ"
          },
          {
            "letter": "B",
            "text": "Giảm m’; Giảm v; Tăng NSLĐ"
          },
          {
            "letter": "C",
            "text": "Tăng m'; Giảm v; Tăng NSLĐ"
          },
          {
            "letter": "D",
            "text": "Tăng m’; Tăng v; Tăng NSLĐ"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tăng m'; Giảm v; Tăng NSLĐ"
      },
      {
        "q_num": 12,
        "orig_id": 194,
        "title_raw": "Câu 12.[!b:$ Giá cả hàng hoá là?$]",
        "clean_text": "Giá cả hàng hoá là?",
        "options_raw": [
          "*A. Biểu hiện bằng tiền của giá trị hàng hoá trên thị trường",
          "B. Tổng của chi phí sản xuất và lợi nhuận",
          "C. Giá trị của hàng hoá",
          "D. Quan hệ về lượng giữa hàng và tiền"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Biểu hiện bằng tiền của giá trị hàng hoá trên thị trường"
          },
          {
            "letter": "B",
            "text": "Tổng của chi phí sản xuất và lợi nhuận"
          },
          {
            "letter": "C",
            "text": "Giá trị của hàng hoá"
          },
          {
            "letter": "D",
            "text": "Quan hệ về lượng giữa hàng và tiền"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Biểu hiện bằng tiền của giá trị hàng hoá trên thị trường"
      },
      {
        "q_num": 13,
        "orig_id": 153,
        "title_raw": "Câu 13.[!b:$ Thực chất của TKQĐ lên CNXH là gì?$]",
        "clean_text": "Thực chất của TKQĐ lên CNXH là gì?",
        "options_raw": [
          "A. Là cuộc cải biến cách mạng về chính trị",
          "B. Là cuộc cải biến cách mạng về kinh tế",
          "C. Là cuộc cải biến cách mạng về tư tưởng và văn hoá",
          "*D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là cuộc cải biến cách mạng về chính trị"
          },
          {
            "letter": "B",
            "text": "Là cuộc cải biến cách mạng về kinh tế"
          },
          {
            "letter": "C",
            "text": "Là cuộc cải biến cách mạng về tư tưởng và văn hoá"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 14,
        "orig_id": 133,
        "title_raw": "Câu 14.[!b:$ Lao động trừu tượng là gì?$]",
        "clean_text": "Lao động trừu tượng là gì?",
        "options_raw": [
          "A. Là lao động phức tạp",
          "B. Là lao động không cụ thể",
          "C. Là lao động có trình độ cao, mất nhiều công đào tạo",
          "*D. Là sự hao phí sức lao động của người sản xuất hàng hoá nói chung không tính đến những hình thức cụ thể"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là lao động phức tạp"
          },
          {
            "letter": "B",
            "text": "Là lao động không cụ thể"
          },
          {
            "letter": "C",
            "text": "Là lao động có trình độ cao, mất nhiều công đào tạo"
          },
          {
            "letter": "D",
            "text": "Là sự hao phí sức lao động của người sản xuất hàng hoá nói chung không tính đến những hình thức cụ thể"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Là sự hao phí sức lao động của người sản xuất hàng hoá nói chung không tính đến những hình thức cụ thể"
      },
      {
        "q_num": 15,
        "orig_id": 196,
        "title_raw": "Câu 15.[!b:$ Giá trị của hàng hoá được quyết định bởi?$]",
        "clean_text": "Giá trị của hàng hoá được quyết định bởi?",
        "options_raw": [
          "A. Sự khan hiếm của hàng hoá",
          "B. Công dụng của hàng hoá",
          "C. Sự hao phí sức lao động của con người",
          "*D. Lao động trừu tượng của người sản xuất kết tinh trong hàng hoá"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự khan hiếm của hàng hoá"
          },
          {
            "letter": "B",
            "text": "Công dụng của hàng hoá"
          },
          {
            "letter": "C",
            "text": "Sự hao phí sức lao động của con người"
          },
          {
            "letter": "D",
            "text": "Lao động trừu tượng của người sản xuất kết tinh trong hàng hoá"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Lao động trừu tượng của người sản xuất kết tinh trong hàng hoá"
      },
      {
        "q_num": 16,
        "orig_id": 123,
        "title_raw": "Câu 16.[!b:$ Các nhân tố nào ảnh hưởng đến NSLĐ?$]",
        "clean_text": "Các nhân tố nào ảnh hưởng đến NSLĐ?",
        "options_raw": [
          "A. Trình độ chuyên môn của người lao động; Trình độ kỹ thuật và công nghệ sản xuất",
          "B. Trình độ chuyên môn của người lao động; Các điều kiện tự nhiên",
          "*C. Trình độ chuyên môn của người lao động; Trình độ kỹ thuật và công nghệ sản xuất; Các điều kiện tự nhiên",
          "D. Trình độ kỹ thuật và công nghệ sản xuất; Các điều kiện tự nhiên"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Trình độ chuyên môn của người lao động; Trình độ kỹ thuật và công nghệ sản xuất"
          },
          {
            "letter": "B",
            "text": "Trình độ chuyên môn của người lao động; Các điều kiện tự nhiên"
          },
          {
            "letter": "C",
            "text": "Trình độ chuyên môn của người lao động; Trình độ kỹ thuật và công nghệ sản xuất; Các điều kiện tự nhiên"
          },
          {
            "letter": "D",
            "text": "Trình độ kỹ thuật và công nghệ sản xuất; Các điều kiện tự nhiên"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Trình độ chuyên môn của người lao động; Trình độ kỹ thuật và công nghệ sản xuất; Các điều kiện tự nhiên"
      },
      {
        "q_num": 17,
        "orig_id": 190,
        "title_raw": "Câu 17.[!b:$ Giá trị sử dụng là?$]",
        "clean_text": "Giá trị sử dụng là?",
        "options_raw": [
          "A. Là tính hữu ích của vật",
          "B. Là công dụng của vật có thể thoả mãn nhu cầu nào đó của con người",
          "*C. Tất cả các đáp án",
          "D. Là thuộc tính tự nhiên của vật"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là tính hữu ích của vật"
          },
          {
            "letter": "B",
            "text": "Là công dụng của vật có thể thoả mãn nhu cầu nào đó của con người"
          },
          {
            "letter": "C",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "D",
            "text": "Là thuộc tính tự nhiên của vật"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 18,
        "orig_id": 67,
        "title_raw": "Câu 18.[!b:$ Đặc điểm nào sau đây không phải là biểu hiện của toàn cầu hoá kinh tế?$]",
        "clean_text": "Đặc điểm nào sau đây không phải là biểu hiện của toàn cầu hoá kinh tế?",
        "options_raw": [
          "A. Đầu tư nước ngoài tăng nhanh",
          "*B. Vai trò của các công ty xuyên quốc gia đang bị giảm sút",
          "C. Thị trường tài chính quốc tế mở rộng",
          "D. Thương mại thế giới phát triển mạnh"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đầu tư nước ngoài tăng nhanh"
          },
          {
            "letter": "B",
            "text": "Vai trò của các công ty xuyên quốc gia đang bị giảm sút"
          },
          {
            "letter": "C",
            "text": "Thị trường tài chính quốc tế mở rộng"
          },
          {
            "letter": "D",
            "text": "Thương mại thế giới phát triển mạnh"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Vai trò của các công ty xuyên quốc gia đang bị giảm sút"
      },
      {
        "q_num": 19,
        "orig_id": 135,
        "title_raw": "Câu 19.[!b:$ Điều gì xảy ra khi tăng năng suất lao động?$]",
        "clean_text": "Điều gì xảy ra khi tăng năng suất lao động?",
        "options_raw": [
          "A. Số lượng hàng hoá làm ra trong 1 đơn vị thời gian tăng, tổng giá trị của hàng hoá không đổi, giá trị 1 đơn vị hàng hoá không đổi",
          "B. Số lượng hàng hoá làm ra trong 1 đơn vị thời gian tăng, tổng giá trị của hàng hoá tăng, giá trị 1 đơn vị hàng hoá giảm xuống",
          "*C. Số lượng hàng hoá làm ra trong 1 đơn vị thời gian tăng lên, tổng giá trị của hàng hoá không đổi, giá trị của 1 đơn vị hàng hoá giảm xuống",
          "D. Số lượng hàng hoá làm ra trong 1 đơn vị thời gian không đổi, tổng giá trị của hàng hoá không đổi, giá trị 1 đơn vị hàng hoá giảm xuống"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Số lượng hàng hoá làm ra trong 1 đơn vị thời gian tăng, tổng giá trị của hàng hoá không đổi, giá trị 1 đơn vị hàng hoá không đổi"
          },
          {
            "letter": "B",
            "text": "Số lượng hàng hoá làm ra trong 1 đơn vị thời gian tăng, tổng giá trị của hàng hoá tăng, giá trị 1 đơn vị hàng hoá giảm xuống"
          },
          {
            "letter": "C",
            "text": "Số lượng hàng hoá làm ra trong 1 đơn vị thời gian tăng lên, tổng giá trị của hàng hoá không đổi, giá trị của 1 đơn vị hàng hoá giảm xuống"
          },
          {
            "letter": "D",
            "text": "Số lượng hàng hoá làm ra trong 1 đơn vị thời gian không đổi, tổng giá trị của hàng hoá không đổi, giá trị 1 đơn vị hàng hoá giảm xuống"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Số lượng hàng hoá làm ra trong 1 đơn vị thời gian tăng lên, tổng giá trị của hàng hoá không đổi, giá trị của 1 đơn vị hàng hoá giảm xuống"
      },
      {
        "q_num": 20,
        "orig_id": 171,
        "title_raw": "Câu 20.[!b:$ Tiền công TBCN là:$]",
        "clean_text": "Tiền công TBCN là:",
        "options_raw": [
          "A. Giá trị lao động",
          "*B. Giá trị sức lao động",
          "C. Giá cả lao động",
          "D. Sự trả công cho lao động"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giá trị lao động"
          },
          {
            "letter": "B",
            "text": "Giá trị sức lao động"
          },
          {
            "letter": "C",
            "text": "Giá cả lao động"
          },
          {
            "letter": "D",
            "text": "Sự trả công cho lao động"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Giá trị sức lao động"
      },
      {
        "q_num": 21,
        "orig_id": 175,
        "title_raw": "Câu 21.[!b:$ Khi nào tiền tệ biến thành tư bản:$]",
        "clean_text": "Khi nào tiền tệ biến thành tư bản:",
        "options_raw": [
          "*A. Sức lao động trở thành hàng hoá",
          "B. Dùng tiền đầu tư vào sản xuất kinh doanh",
          "C. Dùng tiền để buôn bán mua rẻ, bán đắt.",
          "D. Có lượng tiền tệ đủ lớn"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sức lao động trở thành hàng hoá"
          },
          {
            "letter": "B",
            "text": "Dùng tiền đầu tư vào sản xuất kinh doanh"
          },
          {
            "letter": "C",
            "text": "Dùng tiền để buôn bán mua rẻ, bán đắt."
          },
          {
            "letter": "D",
            "text": "Có lượng tiền tệ đủ lớn"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Sức lao động trở thành hàng hoá"
      },
      {
        "q_num": 22,
        "orig_id": 130,
        "title_raw": "Câu 22.[!b:$ Số lượng giá trị sử dụng phụ thuộc các nhân tố nào?$]",
        "clean_text": "Số lượng giá trị sử dụng phụ thuộc các nhân tố nào?",
        "options_raw": [
          "A. Trình độ khoa học công nghệ",
          "B. Những điều kiện tự nhiên",
          "C. Chuyên môn hoá sản xuất",
          "*D. Tất cả các đáp án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Trình độ khoa học công nghệ"
          },
          {
            "letter": "B",
            "text": "Những điều kiện tự nhiên"
          },
          {
            "letter": "C",
            "text": "Chuyên môn hoá sản xuất"
          },
          {
            "letter": "D",
            "text": "Tất cả các đáp án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 23,
        "orig_id": 149,
        "title_raw": "Câu 23.[!b:$ Nội dung nhiệm vụ phát triển LLSX gồm có?$]",
        "clean_text": "Nội dung nhiệm vụ phát triển LLSX gồm có?",
        "options_raw": [
          "A. Xây dựng con người, đào tạo lực lượng lao động mới",
          "B. Tiến hành CNH, HĐH đất nước",
          "C. Xây dựng cơ sở vật chất - kỹ thuật cho CNXH",
          "*D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Xây dựng con người, đào tạo lực lượng lao động mới"
          },
          {
            "letter": "B",
            "text": "Tiến hành CNH, HĐH đất nước"
          },
          {
            "letter": "C",
            "text": "Xây dựng cơ sở vật chất - kỹ thuật cho CNXH"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 24,
        "orig_id": 30,
        "title_raw": "Câu 24.[!b:$ Khi cấu tạo hữu cơ của tư bản tăng lên thì ý nào dưới đây là không đúng?$]",
        "clean_text": "Khi cấu tạo hữu cơ của tư bản tăng lên thì ý nào dưới đây là không đúng?",
        "options_raw": [
          "A. C tăng tuyệt đối và tương đối",
          "B. V tăng tuyệt đối, giảm tương đối",
          "*C. V không tăng",
          "D. Phản ánh sự phát triển của lực lượng sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "C tăng tuyệt đối và tương đối"
          },
          {
            "letter": "B",
            "text": "V tăng tuyệt đối, giảm tương đối"
          },
          {
            "letter": "C",
            "text": "V không tăng"
          },
          {
            "letter": "D",
            "text": "Phản ánh sự phát triển của lực lượng sản xuất"
          }
        ],
        "correct_letter": "C",
        "correct_text": "V không tăng"
      },
      {
        "q_num": 25,
        "orig_id": 128,
        "title_raw": "Câu 25.[!b:$ Giá trị hàng hoá được tạo ra từ đâu$]",
        "clean_text": "Giá trị hàng hoá được tạo ra từ đâu",
        "options_raw": [
          "A. Cả sản xuất, phân phối và trao đổi",
          "*B. Từ sản xuất",
          "C. Từ phân phối và sử dụng",
          "D. Từ trao đổi và tiêu dùng"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cả sản xuất, phân phối và trao đổi"
          },
          {
            "letter": "B",
            "text": "Từ sản xuất"
          },
          {
            "letter": "C",
            "text": "Từ phân phối và sử dụng"
          },
          {
            "letter": "D",
            "text": "Từ trao đổi và tiêu dùng"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Từ sản xuất"
      },
      {
        "q_num": 26,
        "orig_id": 142,
        "title_raw": "Câu 26.[!b:$ Mối quan hệ giữa độc lập tự chủ về kinh tế và độc lập tự chủ về chính trị là gì?$]",
        "clean_text": "Mối quan hệ giữa độc lập tự chủ về kinh tế và độc lập tự chủ về chính trị là gì?",
        "options_raw": [
          "*A. Độc lập tự chủ về kinh tế là nền tảng, cơ sở vật chất cơ bản để củng cố duy trì độc lập tự chủ về chính trị",
          "B. Độc lập tự chủ về kinh tế là góp phần củng cố duy trì độc lập tự chủ về chính trị",
          "C. Độc lập tự chủ về chính trị là nền tảng cơ bản để củng cố duy trì độc lập tự chủ về kinh tế",
          "D. Độc lập tự chủ về chính trị góp phần củng cố duy trì độc lập tự chủ về kinh tế"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Độc lập tự chủ về kinh tế là nền tảng, cơ sở vật chất cơ bản để củng cố duy trì độc lập tự chủ về chính trị"
          },
          {
            "letter": "B",
            "text": "Độc lập tự chủ về kinh tế là góp phần củng cố duy trì độc lập tự chủ về chính trị"
          },
          {
            "letter": "C",
            "text": "Độc lập tự chủ về chính trị là nền tảng cơ bản để củng cố duy trì độc lập tự chủ về kinh tế"
          },
          {
            "letter": "D",
            "text": "Độc lập tự chủ về chính trị góp phần củng cố duy trì độc lập tự chủ về kinh tế"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Độc lập tự chủ về kinh tế là nền tảng, cơ sở vật chất cơ bản để củng cố duy trì độc lập tự chủ về chính trị"
      },
      {
        "q_num": 27,
        "orig_id": 103,
        "title_raw": "Câu 27.[!b:$ Chọn ý đúng về đặc điểm của giá trị thặng dư siêu ngạch trong sản xuất công nghiệp?$]",
        "clean_text": "Chọn ý đúng về đặc điểm của giá trị thặng dư siêu ngạch trong sản xuất công nghiệp?",
        "options_raw": [
          "*A. Chỉ có ở doanh nghiệp có năng suất cá biệt cao hơn năng suất lao động xã hội",
          "B. Chỉ có ở những doanh nghiệp nhỏ, dễ dàng thay đổi và thích nghi",
          "C. Có ở tất cả các doanh nghiệp",
          "D. Chỉ có ở những doanh nghiệp lớn"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Chỉ có ở doanh nghiệp có năng suất cá biệt cao hơn năng suất lao động xã hội"
          },
          {
            "letter": "B",
            "text": "Chỉ có ở những doanh nghiệp nhỏ, dễ dàng thay đổi và thích nghi"
          },
          {
            "letter": "C",
            "text": "Có ở tất cả các doanh nghiệp"
          },
          {
            "letter": "D",
            "text": "Chỉ có ở những doanh nghiệp lớn"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Chỉ có ở doanh nghiệp có năng suất cá biệt cao hơn năng suất lao động xã hội"
      },
      {
        "q_num": 28,
        "orig_id": 24,
        "title_raw": "Câu 28.[!b:$ Ngày lao động là 8h, tỷ suất giá trị thặng dư m&#39; = 100%, nhà tư bản tăng ngày lao động lên 1h và giá trị sức lao động giảm đi 25%. Vậy tỷ suất giá trị thặng dư mới là bao nhiêu?$]",
        "clean_text": "Ngày lao động là 8h, tỷ suất giá trị thặng dư m' = 100%, nhà tư bản tăng ngày lao động lên 1h và giá trị sức lao động giảm đi 25%. Vậy tỷ suất giá trị thặng dư mới là bao nhiêu?",
        "options_raw": [
          "A. 150%",
          "B. 250%",
          "C. 300%",
          "*D. 200%"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "150%"
          },
          {
            "letter": "B",
            "text": "250%"
          },
          {
            "letter": "C",
            "text": "300%"
          },
          {
            "letter": "D",
            "text": "200%"
          }
        ],
        "correct_letter": "D",
        "correct_text": "200%"
      },
      {
        "q_num": 29,
        "orig_id": 109,
        "title_raw": "Câu 29.[!b:$ Muốn tăng khối lượng giá trị thặng dư, nhà tư bản có thể sử dụng những cách nào dưới đây?$]",
        "clean_text": "Muốn tăng khối lượng giá trị thặng dư, nhà tư bản có thể sử dụng những cách nào dưới đây?",
        "options_raw": [
          "A. Kéo dài thời gian lao động trong ngày khi thời gian lao động cần thiết không đổi",
          "*B. Tất cả các đáp án",
          "C. Tăng cường độ lao động khi ngày lao động không đổi",
          "D. Giảm giá trị sức lao động khi ngày lao động không đổi"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Kéo dài thời gian lao động trong ngày khi thời gian lao động cần thiết không đổi"
          },
          {
            "letter": "B",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "C",
            "text": "Tăng cường độ lao động khi ngày lao động không đổi"
          },
          {
            "letter": "D",
            "text": "Giảm giá trị sức lao động khi ngày lao động không đổi"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 30,
        "orig_id": 119,
        "title_raw": "Câu 30.[!b:$ Giá cả của hàng hoá được quyết định bởi?$]",
        "clean_text": "Giá cả của hàng hoá được quyết định bởi?",
        "options_raw": [
          "*A. Tất cả các đáp án",
          "B. Cung cầu và cạnh tranh",
          "C. Giá trị của tiền tệ trong lưu thông",
          "D. Giá trị của hàng hoá"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "B",
            "text": "Cung cầu và cạnh tranh"
          },
          {
            "letter": "C",
            "text": "Giá trị của tiền tệ trong lưu thông"
          },
          {
            "letter": "D",
            "text": "Giá trị của hàng hoá"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tất cả các đáp án"
      }
    ]
  },
  {
    "test_num": 6,
    "title": "Đề trắc nghiệm số 6",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 94,
        "title_raw": "Câu 1.[!b:$ Các tổ chức độc quyền của các quốc gia cạnh tranh trên thị trường quốc tế dẫn đến kết quả gì?$]",
        "clean_text": "Các tổ chức độc quyền của các quốc gia cạnh tranh trên thị trường quốc tế dẫn đến kết quả gì?",
        "options_raw": [
          "A. Thôn tính nhau",
          "B. Thoả hiệp với nhau hình thành các tổ chức độc quyền quốc tế",
          "C. Đấu tranh không khoan nhượng",
          "*D. Tất cả các đáp án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Thôn tính nhau"
          },
          {
            "letter": "B",
            "text": "Thoả hiệp với nhau hình thành các tổ chức độc quyền quốc tế"
          },
          {
            "letter": "C",
            "text": "Đấu tranh không khoan nhượng"
          },
          {
            "letter": "D",
            "text": "Tất cả các đáp án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 2,
        "orig_id": 95,
        "title_raw": "Câu 2.[!b:$ Xuất khẩu tư bản tư nhân thường hướng vào ngành nào?$]",
        "clean_text": "Xuất khẩu tư bản tư nhân thường hướng vào ngành nào?",
        "options_raw": [
          "A. Lợi nhuận cao, vốn chu chuyển chậm",
          "B. Vốn chu chuyển nhanh",
          "*C. Tốc độ chu chuyển vốn nhanh, lợi nhuận cao",
          "D. Kết cấu hạ tầng sản xuất, xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lợi nhuận cao, vốn chu chuyển chậm"
          },
          {
            "letter": "B",
            "text": "Vốn chu chuyển nhanh"
          },
          {
            "letter": "C",
            "text": "Tốc độ chu chuyển vốn nhanh, lợi nhuận cao"
          },
          {
            "letter": "D",
            "text": "Kết cấu hạ tầng sản xuất, xã hội"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tốc độ chu chuyển vốn nhanh, lợi nhuận cao"
      },
      {
        "q_num": 3,
        "orig_id": 7,
        "title_raw": "Câu 3.[!b:$ Khi đồng nội tệ được định giá cao quá mức thì hoạt động xuất nhập khẩu sẽ:$]",
        "clean_text": "Khi đồng nội tệ được định giá cao quá mức thì hoạt động xuất nhập khẩu sẽ:",
        "options_raw": [
          "A. Khuyến khích cả xuất và nhập khẩu",
          "*B. Khuyến khích nhập khẩu, hạn chế xuất khẩu",
          "C. Hạn chế nhập khẩu, khuyến khích tiêu dùng hàng nội địa",
          "D. Hạn chế nhập khẩu, khuyến khích xuất khẩu"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Khuyến khích cả xuất và nhập khẩu"
          },
          {
            "letter": "B",
            "text": "Khuyến khích nhập khẩu, hạn chế xuất khẩu"
          },
          {
            "letter": "C",
            "text": "Hạn chế nhập khẩu, khuyến khích tiêu dùng hàng nội địa"
          },
          {
            "letter": "D",
            "text": "Hạn chế nhập khẩu, khuyến khích xuất khẩu"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Khuyến khích nhập khẩu, hạn chế xuất khẩu"
      },
      {
        "q_num": 4,
        "orig_id": 80,
        "title_raw": "Câu 4.[!b:$ Thời đại mới - thời kỳ quá độ lên CNXH trên phạm vi toàn thế giới, bắt đầu từ:$]",
        "clean_text": "Thời đại mới - thời kỳ quá độ lên CNXH trên phạm vi toàn thế giới, bắt đầu từ:",
        "options_raw": [
          "*A. Từ sau CM tháng 10 năm 1917 thành công",
          "B. Từ khi bắt đầu thực hiện chính sách kinh tế mới (NEP) 1921",
          "C. Từ CM tháng II năm 1917",
          "D. Từ sau khi Liên Xô kết thúc thời kỳ quá độ đi lên CNXH"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Từ sau CM tháng 10 năm 1917 thành công"
          },
          {
            "letter": "B",
            "text": "Từ khi bắt đầu thực hiện chính sách kinh tế mới (NEP) 1921"
          },
          {
            "letter": "C",
            "text": "Từ CM tháng II năm 1917"
          },
          {
            "letter": "D",
            "text": "Từ sau khi Liên Xô kết thúc thời kỳ quá độ đi lên CNXH"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Từ sau CM tháng 10 năm 1917 thành công"
      },
      {
        "q_num": 5,
        "orig_id": 148,
        "title_raw": "Câu 5.[!b:$ QHSX mới theo định hướng XHCN đang được xây dựng ở nước ta là thế nào?$]",
        "clean_text": "QHSX mới theo định hướng XHCN đang được xây dựng ở nước ta là thế nào?",
        "options_raw": [
          "A. Đa dạng hoá về sở hữu, nhiều thành phần kinh tế",
          "*B. Tất cả các phương án",
          "C. Dựa trên nhiều phương thức tổ chức sản xuất kinh doanh, nhiều hình thức phân phối",
          "D. Phải tuân theo quy luật: QHSX phù hợp với tính chất và trình độ phát triển của LLSX"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đa dạng hoá về sở hữu, nhiều thành phần kinh tế"
          },
          {
            "letter": "B",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "C",
            "text": "Dựa trên nhiều phương thức tổ chức sản xuất kinh doanh, nhiều hình thức phân phối"
          },
          {
            "letter": "D",
            "text": "Phải tuân theo quy luật: QHSX phù hợp với tính chất và trình độ phát triển của LLSX"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 6,
        "orig_id": 37,
        "title_raw": "Câu 6.[!b:$ Những ý kiến dưới đây về sản xuất giá trị thặng dư của CNTB ngày nay, nhận xét nào đúng?$]",
        "clean_text": "Những ý kiến dưới đây về sản xuất giá trị thặng dư của CNTB ngày nay, nhận xét nào đúng?",
        "options_raw": [
          "A. Tỷ suất giá trị thặng dư tăng lên.",
          "B. Tăng NSLĐ và khối lượng giá trị thặng dư",
          "C. Máy móc thiết bị hiện đại thay thế lao động sống nhiều hơn",
          "*D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tỷ suất giá trị thặng dư tăng lên."
          },
          {
            "letter": "B",
            "text": "Tăng NSLĐ và khối lượng giá trị thặng dư"
          },
          {
            "letter": "C",
            "text": "Máy móc thiết bị hiện đại thay thế lao động sống nhiều hơn"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 7,
        "orig_id": 118,
        "title_raw": "Câu 7.[!b:$ Mâu thuẫn cơ bản của sản xuất hàng hoá giản đơn là:$]",
        "clean_text": "Mâu thuẫn cơ bản của sản xuất hàng hoá giản đơn là:",
        "options_raw": [
          "A. Giữa lao động giản đơn với lao động phức tạp, lao động trí óc",
          "*B. Giữa lao động tư nhân với lao động xã hội",
          "C. Giữa giá trị với giá trị sử dụng",
          "D. Giữa lao động cụ thể tư nhân với lao động trừu tượng xã hội"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giữa lao động giản đơn với lao động phức tạp, lao động trí óc"
          },
          {
            "letter": "B",
            "text": "Giữa lao động tư nhân với lao động xã hội"
          },
          {
            "letter": "C",
            "text": "Giữa giá trị với giá trị sử dụng"
          },
          {
            "letter": "D",
            "text": "Giữa lao động cụ thể tư nhân với lao động trừu tượng xã hội"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Giữa lao động tư nhân với lao động xã hội"
      },
      {
        "q_num": 8,
        "orig_id": 179,
        "title_raw": "Câu 8.[!b:$ Điều kiện tất yếu để sức lao động trở thành hàng hoá là?$]",
        "clean_text": "Điều kiện tất yếu để sức lao động trở thành hàng hoá là?",
        "options_raw": [
          "*A. Người lao động được tự do thân thể, không có TLSX và của cải đủ nuôi sống bản thân và gia đình.",
          "B. Người lao động được tự do về thân thể, tự nguyện bán sức lao động",
          "C. Người lao động không có TLSX và của cải gì",
          "D. Người lao động tự nguyện đi làm thuê"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Người lao động được tự do thân thể, không có TLSX và của cải đủ nuôi sống bản thân và gia đình."
          },
          {
            "letter": "B",
            "text": "Người lao động được tự do về thân thể, tự nguyện bán sức lao động"
          },
          {
            "letter": "C",
            "text": "Người lao động không có TLSX và của cải gì"
          },
          {
            "letter": "D",
            "text": "Người lao động tự nguyện đi làm thuê"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Người lao động được tự do thân thể, không có TLSX và của cải đủ nuôi sống bản thân và gia đình."
      },
      {
        "q_num": 9,
        "orig_id": 75,
        "title_raw": "Câu 9.[!b:$ Nền kinh tế tri thức được xem là?$]",
        "clean_text": "Nền kinh tế tri thức được xem là?",
        "options_raw": [
          "A. Một hình thái kinh tế - xã hội mới",
          "B. Một phương thức sản xuất mới",
          "*C. Một nấc thang phát triển của lực lượng sản xuất",
          "D. Một giai đoạn mới của CNTB hiện đại"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Một hình thái kinh tế - xã hội mới"
          },
          {
            "letter": "B",
            "text": "Một phương thức sản xuất mới"
          },
          {
            "letter": "C",
            "text": "Một nấc thang phát triển của lực lượng sản xuất"
          },
          {
            "letter": "D",
            "text": "Một giai đoạn mới của CNTB hiện đại"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Một nấc thang phát triển của lực lượng sản xuất"
      },
      {
        "q_num": 10,
        "orig_id": 138,
        "title_raw": "Câu 10.[!b:$ Sản xuất hàng hoá tồn tại ở xã hội nào?$]",
        "clean_text": "Sản xuất hàng hoá tồn tại ở xã hội nào?",
        "options_raw": [
          "A. Chỉ có trong CNTB",
          "B. Trong chế độ nô lệ, phong kiến, TBCN",
          "C. Trong mọi xã hội",
          "*D. Trong các xã hội, có phân công lao động xã hội và sự tách biệt về kinh tế giữa những người sản xuất"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Chỉ có trong CNTB"
          },
          {
            "letter": "B",
            "text": "Trong chế độ nô lệ, phong kiến, TBCN"
          },
          {
            "letter": "C",
            "text": "Trong mọi xã hội"
          },
          {
            "letter": "D",
            "text": "Trong các xã hội, có phân công lao động xã hội và sự tách biệt về kinh tế giữa những người sản xuất"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Trong các xã hội, có phân công lao động xã hội và sự tách biệt về kinh tế giữa những người sản xuất"
      },
      {
        "q_num": 11,
        "orig_id": 191,
        "title_raw": "Câu 11.[!b:$ Lượng giá trị xã hội của hàng hoá được quyết định bởi:$]",
        "clean_text": "Lượng giá trị xã hội của hàng hoá được quyết định bởi:",
        "options_raw": [
          "A. Hao phí lao động cần thiết của người sản xuất hàng hoá",
          "B. Hao phí lao động sống của người sản xuất hàng hoá",
          "C. Hao phí vật tư kỹ thuật",
          "*D. Thời gian lao động xã hội cần thiết"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hao phí lao động cần thiết của người sản xuất hàng hoá"
          },
          {
            "letter": "B",
            "text": "Hao phí lao động sống của người sản xuất hàng hoá"
          },
          {
            "letter": "C",
            "text": "Hao phí vật tư kỹ thuật"
          },
          {
            "letter": "D",
            "text": "Thời gian lao động xã hội cần thiết"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Thời gian lao động xã hội cần thiết"
      },
      {
        "q_num": 12,
        "orig_id": 23,
        "title_raw": "Câu 12.[!b:$ Nhà nước tư sản đảm nhận đầu tư vào ngành nào?$]",
        "clean_text": "Nhà nước tư sản đảm nhận đầu tư vào ngành nào?",
        "options_raw": [
          "A. Đầu tư lớn, thu hồi vốn chậm, lợi nhuận cao",
          "B. Đầu tư lớn, thu hồi vốn nhanh, lợi nhuận ít",
          "*C. Đầu tư lớn, thu hồi vốn chậm, lợi nhuận ít",
          "D. Đầu tư không lớn, thu hồi vốn nhanh, lợi nhuận cao"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đầu tư lớn, thu hồi vốn chậm, lợi nhuận cao"
          },
          {
            "letter": "B",
            "text": "Đầu tư lớn, thu hồi vốn nhanh, lợi nhuận ít"
          },
          {
            "letter": "C",
            "text": "Đầu tư lớn, thu hồi vốn chậm, lợi nhuận ít"
          },
          {
            "letter": "D",
            "text": "Đầu tư không lớn, thu hồi vốn nhanh, lợi nhuận cao"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Đầu tư lớn, thu hồi vốn chậm, lợi nhuận ít"
      },
      {
        "q_num": 13,
        "orig_id": 88,
        "title_raw": "Câu 13.[!b:$ Kết quả cạnh tranh giữa các tổ chức độc quyền trong cùng một ngành là?$]",
        "clean_text": "Kết quả cạnh tranh giữa các tổ chức độc quyền trong cùng một ngành là?",
        "options_raw": [
          "A. Một bên phá sản",
          "B. Hai bên cùng phát triển",
          "C. Một sự thoả hiệp",
          "*D. Một sự thoả hiệp hoặc một bên phá sản"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Một bên phá sản"
          },
          {
            "letter": "B",
            "text": "Hai bên cùng phát triển"
          },
          {
            "letter": "C",
            "text": "Một sự thoả hiệp"
          },
          {
            "letter": "D",
            "text": "Một sự thoả hiệp hoặc một bên phá sản"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Một sự thoả hiệp hoặc một bên phá sản"
      },
      {
        "q_num": 14,
        "orig_id": 20,
        "title_raw": "Câu 14.[!b:$ Trình độ xã hội hoá lực lượng sản xuất phát triển cao đặt ra:$]",
        "clean_text": "Trình độ xã hội hoá lực lượng sản xuất phát triển cao đặt ra:",
        "options_raw": [
          "A. Nhà nước không nên can thiệp vào kinh tế",
          "B. Nhà nước chỉ nên can thiệp vào kinh tế đối ngoại",
          "*C. Nhà nước can thiệp vào kinh tế với vai trò quản lý chung",
          "D. Nhà nước chỉ nên đóng vai trò &quot;người gác cổng&quot;"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nhà nước không nên can thiệp vào kinh tế"
          },
          {
            "letter": "B",
            "text": "Nhà nước chỉ nên can thiệp vào kinh tế đối ngoại"
          },
          {
            "letter": "C",
            "text": "Nhà nước can thiệp vào kinh tế với vai trò quản lý chung"
          },
          {
            "letter": "D",
            "text": "Nhà nước chỉ nên đóng vai trò \"người gác cổng\""
          }
        ],
        "correct_letter": "C",
        "correct_text": "Nhà nước can thiệp vào kinh tế với vai trò quản lý chung"
      },
      {
        "q_num": 15,
        "orig_id": 164,
        "title_raw": "Câu 15.[!b:$ CNTB độc quyền là?$]",
        "clean_text": "CNTB độc quyền là?",
        "options_raw": [
          "A. Một hình thái kinh tế- xã hội",
          "B. Một PTSX mới",
          "*C. Một giai đoạn phát triển của PTSX-TBCN",
          "D. Một nấc thang phát triển của LLSX"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Một hình thái kinh tế- xã hội"
          },
          {
            "letter": "B",
            "text": "Một PTSX mới"
          },
          {
            "letter": "C",
            "text": "Một giai đoạn phát triển của PTSX-TBCN"
          },
          {
            "letter": "D",
            "text": "Một nấc thang phát triển của LLSX"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Một giai đoạn phát triển của PTSX-TBCN"
      },
      {
        "q_num": 16,
        "orig_id": 197,
        "title_raw": "Câu 16.[!b:$ Hàng hoá có mấy thuộc tính:$]",
        "clean_text": "Hàng hoá có mấy thuộc tính:",
        "options_raw": [
          "A. 4",
          "*B. 2",
          "C. 3",
          "D. 1"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "4"
          },
          {
            "letter": "B",
            "text": "2"
          },
          {
            "letter": "C",
            "text": "3"
          },
          {
            "letter": "D",
            "text": "1"
          }
        ],
        "correct_letter": "B",
        "correct_text": "2"
      },
      {
        "q_num": 17,
        "orig_id": 97,
        "title_raw": "Câu 17.[!b:$ Vì sao các nhà tư bản thực hiện tích luỹ tư bản?$]",
        "clean_text": "Vì sao các nhà tư bản thực hiện tích luỹ tư bản?",
        "options_raw": [
          "A. Do quy luật giá trị thặng dư chi phối",
          "*B. Tất cả các đáp án",
          "C. Do quy luật giá trị",
          "D. Do quy luật cạnh tranh chi phối"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Do quy luật giá trị thặng dư chi phối"
          },
          {
            "letter": "B",
            "text": "Tất cả các đáp án"
          },
          {
            "letter": "C",
            "text": "Do quy luật giá trị"
          },
          {
            "letter": "D",
            "text": "Do quy luật cạnh tranh chi phối"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 18,
        "orig_id": 92,
        "title_raw": "Câu 18.[!b:$ Vì sao trong CNTB độc quyền cạnh tranh không bị thủ tiêu:$]",
        "clean_text": "Vì sao trong CNTB độc quyền cạnh tranh không bị thủ tiêu:",
        "options_raw": [
          "*A. Vì cạnh tranh là quy luật khách quan của kinh tế hàng hoá",
          "B. Vì tổ chức độc quyền cạnh tranh với các công ty ngoài độc quyền",
          "C. Vì các tổ chức độc quyền cạnh tranh với nhau",
          "D. Vì các xí nghiệp trong nội bộ tổ chức độc quyền cạnh tranh với nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Vì cạnh tranh là quy luật khách quan của kinh tế hàng hoá"
          },
          {
            "letter": "B",
            "text": "Vì tổ chức độc quyền cạnh tranh với các công ty ngoài độc quyền"
          },
          {
            "letter": "C",
            "text": "Vì các tổ chức độc quyền cạnh tranh với nhau"
          },
          {
            "letter": "D",
            "text": "Vì các xí nghiệp trong nội bộ tổ chức độc quyền cạnh tranh với nhau"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Vì cạnh tranh là quy luật khách quan của kinh tế hàng hoá"
      },
      {
        "q_num": 19,
        "orig_id": 90,
        "title_raw": "Câu 19.[!b:$ Hãy chọn mệnh đề đúng trong các mệnh đề dưới đây?$]",
        "clean_text": "Hãy chọn mệnh đề đúng trong các mệnh đề dưới đây?",
        "options_raw": [
          "*A. Độc quyền là con đẻ của cạnh tranh, đối lập với cạnh tranh nhưng không thể thủ tiêu cạnh tranh",
          "B. Độc quyền là con đẻ của cạnh tranh, đối lập với cạnh tranh và thủ tiêu cạnh tranh",
          "C. Độc quyền ở mức độ cao có thể thủ tiêu cạnh tranh",
          "D. Cạnh tranh sinh ra độc quyền, chúng không đối lập nhau"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Độc quyền là con đẻ của cạnh tranh, đối lập với cạnh tranh nhưng không thể thủ tiêu cạnh tranh"
          },
          {
            "letter": "B",
            "text": "Độc quyền là con đẻ của cạnh tranh, đối lập với cạnh tranh và thủ tiêu cạnh tranh"
          },
          {
            "letter": "C",
            "text": "Độc quyền ở mức độ cao có thể thủ tiêu cạnh tranh"
          },
          {
            "letter": "D",
            "text": "Cạnh tranh sinh ra độc quyền, chúng không đối lập nhau"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Độc quyền là con đẻ của cạnh tranh, đối lập với cạnh tranh nhưng không thể thủ tiêu cạnh tranh"
      },
      {
        "q_num": 20,
        "orig_id": 65,
        "title_raw": "Câu 20.[!b:$ Các tổ chức liên kết khu vực được hình thành chủ yếu dựa trên cơ sở nào?$]",
        "clean_text": "Các tổ chức liên kết khu vực được hình thành chủ yếu dựa trên cơ sở nào?",
        "options_raw": [
          "*A. Cùng có chung mục tiêu lợi ích phát triển",
          "B. Đều bị cạnh tranh gay gắt",
          "C. Có quy mô dân số tương đồng nhau",
          "D. Nằm trong một châu lục"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cùng có chung mục tiêu lợi ích phát triển"
          },
          {
            "letter": "B",
            "text": "Đều bị cạnh tranh gay gắt"
          },
          {
            "letter": "C",
            "text": "Có quy mô dân số tương đồng nhau"
          },
          {
            "letter": "D",
            "text": "Nằm trong một châu lục"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Cùng có chung mục tiêu lợi ích phát triển"
      },
      {
        "q_num": 21,
        "orig_id": 102,
        "title_raw": "Câu 21.[!b:$ Giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch giống nhau ở những điểm nào:$]",
        "clean_text": "Giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch giống nhau ở những điểm nào:",
        "options_raw": [
          "A. Đều tồn tại ở tất cả các doanh nghiệp",
          "*B. Đều dựa trên tiền đề tăng NSLĐ",
          "C. Đều do sự tiến bộ khoa học kỹ thuật",
          "D. Đều do kéo dài ngày lao động"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đều tồn tại ở tất cả các doanh nghiệp"
          },
          {
            "letter": "B",
            "text": "Đều dựa trên tiền đề tăng NSLĐ"
          },
          {
            "letter": "C",
            "text": "Đều do sự tiến bộ khoa học kỹ thuật"
          },
          {
            "letter": "D",
            "text": "Đều do kéo dài ngày lao động"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Đều dựa trên tiền đề tăng NSLĐ"
      },
      {
        "q_num": 22,
        "orig_id": 54,
        "title_raw": "Câu 22.[!b:$ Quy luật giá trị hoạt động tự phát có thể dẫn đến sự hình thành QHSX TBCN không? Chọn câu trả lời đúng nhất:$]",
        "clean_text": "Quy luật giá trị hoạt động tự phát có thể dẫn đến sự hình thành QHSX TBCN không? Chọn câu trả lời đúng nhất:",
        "options_raw": [
          "A. Tác động nhanh chóng",
          "B. Không",
          "C. Có",
          "*D. Có nhưng rất chậm chạp"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tác động nhanh chóng"
          },
          {
            "letter": "B",
            "text": "Không"
          },
          {
            "letter": "C",
            "text": "Có"
          },
          {
            "letter": "D",
            "text": "Có nhưng rất chậm chạp"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Có nhưng rất chậm chạp"
      },
      {
        "q_num": 23,
        "orig_id": 81,
        "title_raw": "Câu 23.[!b:$ Hình thức xuất khẩu chủ yếu của CNTB ngày nay là?$]",
        "clean_text": "Hình thức xuất khẩu chủ yếu của CNTB ngày nay là?",
        "options_raw": [
          "A. Đầu tư gián tiếp",
          "B. Đầu tư trực tiếp kết hợp đầu tư gián tiếp",
          "*C. Xuất khẩu tư bản kết hợp xuất khẩu hàng hoá",
          "D. Đầu tư trực tiếp"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đầu tư gián tiếp"
          },
          {
            "letter": "B",
            "text": "Đầu tư trực tiếp kết hợp đầu tư gián tiếp"
          },
          {
            "letter": "C",
            "text": "Xuất khẩu tư bản kết hợp xuất khẩu hàng hoá"
          },
          {
            "letter": "D",
            "text": "Đầu tư trực tiếp"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Xuất khẩu tư bản kết hợp xuất khẩu hàng hoá"
      },
      {
        "q_num": 24,
        "orig_id": 174,
        "title_raw": "Câu 24.[!b:$ Chọn ý đúng trong các ý dưới đây$]",
        "clean_text": "Chọn ý đúng trong các ý dưới đây",
        "options_raw": [
          "A. Giá trị thặng dư là phần thưởng cho nhà tư bản",
          "*B. Giá trị thặng dư là lao động thặng dư kết tinh",
          "C. Giá trị thặng dư thể hiện tài năng kinh doanh của nhà tư bản",
          "D. Giá trị thặng dư là phần lợi nhuận của đầu tư tư bản"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giá trị thặng dư là phần thưởng cho nhà tư bản"
          },
          {
            "letter": "B",
            "text": "Giá trị thặng dư là lao động thặng dư kết tinh"
          },
          {
            "letter": "C",
            "text": "Giá trị thặng dư thể hiện tài năng kinh doanh của nhà tư bản"
          },
          {
            "letter": "D",
            "text": "Giá trị thặng dư là phần lợi nhuận của đầu tư tư bản"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Giá trị thặng dư là lao động thặng dư kết tinh"
      },
      {
        "q_num": 25,
        "orig_id": 187,
        "title_raw": "Câu 25.[!b:$ Tiền tệ là?$]",
        "clean_text": "Tiền tệ là?",
        "options_raw": [
          "A. Là phương tiện thanh toán quốc tế",
          "B. Phương tiện để lưu thông hàng hoá và để thanh toán",
          "C. Thước đo giá trị của hàng hoá",
          "*D. Là hàng hoá đặc biệt đóng vai trò là vật ngang giá chung"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là phương tiện thanh toán quốc tế"
          },
          {
            "letter": "B",
            "text": "Phương tiện để lưu thông hàng hoá và để thanh toán"
          },
          {
            "letter": "C",
            "text": "Thước đo giá trị của hàng hoá"
          },
          {
            "letter": "D",
            "text": "Là hàng hoá đặc biệt đóng vai trò là vật ngang giá chung"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Là hàng hoá đặc biệt đóng vai trò là vật ngang giá chung"
      },
      {
        "q_num": 26,
        "orig_id": 3,
        "title_raw": "Câu 26.[!b:$ Các tổ chức liên kết kinh tế khu vực hình thành không phải trên cơ sở$]",
        "clean_text": "Các tổ chức liên kết kinh tế khu vực hình thành không phải trên cơ sở",
        "options_raw": [
          "A. Những quốc gia có chung mục tiêu, lợi ích phát triển",
          "B. Những quốc gia có nét tương đồng về địa lý",
          "C. Những quốc gia có nét tương đồng về văn hoá – xã hội",
          "*D. Những quốc gia trong cùng nhóm nước phát triển hoặc cùng nhóm nước đang phát triển"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Những quốc gia có chung mục tiêu, lợi ích phát triển"
          },
          {
            "letter": "B",
            "text": "Những quốc gia có nét tương đồng về địa lý"
          },
          {
            "letter": "C",
            "text": "Những quốc gia có nét tương đồng về văn hoá – xã hội"
          },
          {
            "letter": "D",
            "text": "Những quốc gia trong cùng nhóm nước phát triển hoặc cùng nhóm nước đang phát triển"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Những quốc gia trong cùng nhóm nước phát triển hoặc cùng nhóm nước đang phát triển"
      },
      {
        "q_num": 27,
        "orig_id": 116,
        "title_raw": "Câu 27.[!b:$ Quan hệ giữa giá cả và giá trị:$]",
        "clean_text": "Quan hệ giữa giá cả và giá trị:",
        "options_raw": [
          "A. Giá trị hàng hoá luôn cao hơn giá cả của hàng hoá",
          "B. Công dụng của hàng hoá quyết định giá cả của hàng hoá đó",
          "*C. Giá trị là cơ sở của giá cả, là yếu tố quyết định giá cả",
          "D. Giá cả hình thành tự phát, không chịu sự quyết định của giá trị"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giá trị hàng hoá luôn cao hơn giá cả của hàng hoá"
          },
          {
            "letter": "B",
            "text": "Công dụng của hàng hoá quyết định giá cả của hàng hoá đó"
          },
          {
            "letter": "C",
            "text": "Giá trị là cơ sở của giá cả, là yếu tố quyết định giá cả"
          },
          {
            "letter": "D",
            "text": "Giá cả hình thành tự phát, không chịu sự quyết định của giá trị"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Giá trị là cơ sở của giá cả, là yếu tố quyết định giá cả"
      },
      {
        "q_num": 28,
        "orig_id": 26,
        "title_raw": "Câu 28.[!b:$ Giá trị của TLSX đã tiêu dùng tham gia vào tạo ra giá trị của sản phẩm mới. Chọn các ý đúng dưới dây:$]",
        "clean_text": "Giá trị của TLSX đã tiêu dùng tham gia vào tạo ra giá trị của sản phẩm mới. Chọn các ý đúng dưới dây:",
        "options_raw": [
          "*A. Không tham gia tạo thành giá trị mới của sản phẩm",
          "B. Tham gia tạo thành giá trị mới của sản phẩm",
          "C. Quyết định giá trị mới của sản phẩm",
          "D. Không tham gia vào giá trị của sản phẩm mới"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Không tham gia tạo thành giá trị mới của sản phẩm"
          },
          {
            "letter": "B",
            "text": "Tham gia tạo thành giá trị mới của sản phẩm"
          },
          {
            "letter": "C",
            "text": "Quyết định giá trị mới của sản phẩm"
          },
          {
            "letter": "D",
            "text": "Không tham gia vào giá trị của sản phẩm mới"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Không tham gia tạo thành giá trị mới của sản phẩm"
      },
      {
        "q_num": 29,
        "orig_id": 74,
        "title_raw": "Câu 29.[!b:$ Mối quan hệ giữa nội lực và ngoại lực trong phát triển kinh tế là?$]",
        "clean_text": "Mối quan hệ giữa nội lực và ngoại lực trong phát triển kinh tế là?",
        "options_raw": [
          "*A. Nội lực là chính, ngoại lực là rất quan trọng trong thời kỳ đầu.",
          "B. Nội lực là chính",
          "C. Nội lực và ngoại lực quan trọng như nhau",
          "D. Ngoại lực là chính để phá vỡ &quot;cái vòng luẩn quẩn&quot;"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nội lực là chính, ngoại lực là rất quan trọng trong thời kỳ đầu."
          },
          {
            "letter": "B",
            "text": "Nội lực là chính"
          },
          {
            "letter": "C",
            "text": "Nội lực và ngoại lực quan trọng như nhau"
          },
          {
            "letter": "D",
            "text": "Ngoại lực là chính để phá vỡ \"cái vòng luẩn quẩn\""
          }
        ],
        "correct_letter": "A",
        "correct_text": "Nội lực là chính, ngoại lực là rất quan trọng trong thời kỳ đầu."
      },
      {
        "q_num": 30,
        "orig_id": 29,
        "title_raw": "Câu 30.[!b:$ Chọn các ý đúng trong các nhận định dưới đây:$]",
        "clean_text": "Chọn các ý đúng trong các nhận định dưới đây:",
        "options_raw": [
          "A. Thị trường sức lao động là thoả thuận giữa người mua và người bán, người mua thường chịu rủi ro pháp lý",
          "*B. Người bán và người mua sức lao động đều bình đẳng về mặt pháp lý",
          "C. Người mua sức lao động luôn chịu sự bất lợi về pháp lý",
          "D. Người bán sức lao động luôn chịu sự bất lợi về pháp lý"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Thị trường sức lao động là thoả thuận giữa người mua và người bán, người mua thường chịu rủi ro pháp lý"
          },
          {
            "letter": "B",
            "text": "Người bán và người mua sức lao động đều bình đẳng về mặt pháp lý"
          },
          {
            "letter": "C",
            "text": "Người mua sức lao động luôn chịu sự bất lợi về pháp lý"
          },
          {
            "letter": "D",
            "text": "Người bán sức lao động luôn chịu sự bất lợi về pháp lý"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Người bán và người mua sức lao động đều bình đẳng về mặt pháp lý"
      }
    ]
  },
  {
    "test_num": 7,
    "title": "Đề trắc nghiệm số 7",
    "questions": [
      {
        "q_num": 1,
        "orig_id": 43,
        "title_raw": "Câu 1.[!b:$ Khi nào sức lao động trở thành hàng hoá một cách phổ biến?$]",
        "clean_text": "Khi nào sức lao động trở thành hàng hoá một cách phổ biến?",
        "options_raw": [
          "A. Trong xã hội chiếm hữu nô lệ",
          "*B. Trong nền sản xuất hàng hoá TBCN",
          "C. Trong nền sản xuất hàng hoá giản đơn",
          "D. Trong nền sản xuất lớn hiện đại"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Trong xã hội chiếm hữu nô lệ"
          },
          {
            "letter": "B",
            "text": "Trong nền sản xuất hàng hoá TBCN"
          },
          {
            "letter": "C",
            "text": "Trong nền sản xuất hàng hoá giản đơn"
          },
          {
            "letter": "D",
            "text": "Trong nền sản xuất lớn hiện đại"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Trong nền sản xuất hàng hoá TBCN"
      },
      {
        "q_num": 2,
        "orig_id": 108,
        "title_raw": "Câu 2.[!b:$ Phương pháp sản xuất giá trị thặng dư tuyệt đối và phương pháp sản xuất giá trị thặng dư tương đối có điểm nào giống nhau? Chọn ý đúng:$]",
        "clean_text": "Phương pháp sản xuất giá trị thặng dư tuyệt đối và phương pháp sản xuất giá trị thặng dư tương đối có điểm nào giống nhau? Chọn ý đúng:",
        "options_raw": [
          "*A. Đều làm tăng tỷ suất giá trị thặng dư",
          "B. Đều làm cho công nhân tốn sức lao động nhiều hơn",
          "C. Đều làm giảm giá trị sức lao động của công nhân",
          "D. Tất cả các đáp án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Đều làm tăng tỷ suất giá trị thặng dư"
          },
          {
            "letter": "B",
            "text": "Đều làm cho công nhân tốn sức lao động nhiều hơn"
          },
          {
            "letter": "C",
            "text": "Đều làm giảm giá trị sức lao động của công nhân"
          },
          {
            "letter": "D",
            "text": "Tất cả các đáp án"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Đều làm tăng tỷ suất giá trị thặng dư"
      },
      {
        "q_num": 3,
        "orig_id": 98,
        "title_raw": "Câu 3.[!b:$ Cơ sở chung của giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch là?$]",
        "clean_text": "Cơ sở chung của giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch là?",
        "options_raw": [
          "*A. Giảm giá trị sức lao động",
          "B. Tăng NSLĐ xã hội",
          "C. Tăng NSLĐ",
          "D. Tăng NSLĐ cá biệt"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giảm giá trị sức lao động"
          },
          {
            "letter": "B",
            "text": "Tăng NSLĐ xã hội"
          },
          {
            "letter": "C",
            "text": "Tăng NSLĐ"
          },
          {
            "letter": "D",
            "text": "Tăng NSLĐ cá biệt"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Giảm giá trị sức lao động"
      },
      {
        "q_num": 4,
        "orig_id": 161,
        "title_raw": "Câu 4.[!b:$ Sự ra đời của tư bản tài chính là kết quả của?$]",
        "clean_text": "Sự ra đời của tư bản tài chính là kết quả của?",
        "options_raw": [
          "A. Sự ra đời của độc quyền ngân hàng",
          "*B. Quá trình xâm nhập liên kết độc quyền ngân hàng với độc quyền công nghiệp",
          "C. Sự phát triển của thị trường tài chính",
          "D. Sự phát triển của độc quyền công nghiệp"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sự ra đời của độc quyền ngân hàng"
          },
          {
            "letter": "B",
            "text": "Quá trình xâm nhập liên kết độc quyền ngân hàng với độc quyền công nghiệp"
          },
          {
            "letter": "C",
            "text": "Sự phát triển của thị trường tài chính"
          },
          {
            "letter": "D",
            "text": "Sự phát triển của độc quyền công nghiệp"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Quá trình xâm nhập liên kết độc quyền ngân hàng với độc quyền công nghiệp"
      },
      {
        "q_num": 5,
        "orig_id": 166,
        "title_raw": "Câu 5.[!b:$ Hình thức nào không phải biểu hiện giá trị thặng dư?$]",
        "clean_text": "Hình thức nào không phải biểu hiện giá trị thặng dư?",
        "options_raw": [
          "A. Lợi tức",
          "B. Lợi nhuận",
          "C. Địa tô",
          "*D. Tiền lương"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lợi tức"
          },
          {
            "letter": "B",
            "text": "Lợi nhuận"
          },
          {
            "letter": "C",
            "text": "Địa tô"
          },
          {
            "letter": "D",
            "text": "Tiền lương"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tiền lương"
      },
      {
        "q_num": 6,
        "orig_id": 110,
        "title_raw": "Câu 6.[!b:$ Trong quá trình sản xuất giá trị thặng dư, giá trị TLSX đã tiêu dùng sẽ như thế nào?$]",
        "clean_text": "Trong quá trình sản xuất giá trị thặng dư, giá trị TLSX đã tiêu dùng sẽ như thế nào?",
        "options_raw": [
          "A. Không được tái sản xuất",
          "B. Được tái sản xuất",
          "*C. Được lao động cụ thể của người sản xuất hàng hoá bảo tồn và chuyển vào giá trị của sản phẩm mới",
          "D. Được bù đắp"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Không được tái sản xuất"
          },
          {
            "letter": "B",
            "text": "Được tái sản xuất"
          },
          {
            "letter": "C",
            "text": "Được lao động cụ thể của người sản xuất hàng hoá bảo tồn và chuyển vào giá trị của sản phẩm mới"
          },
          {
            "letter": "D",
            "text": "Được bù đắp"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Được lao động cụ thể của người sản xuất hàng hoá bảo tồn và chuyển vào giá trị của sản phẩm mới"
      },
      {
        "q_num": 7,
        "orig_id": 187,
        "title_raw": "Câu 7.[!b:$ Tiền tệ là?$]",
        "clean_text": "Tiền tệ là?",
        "options_raw": [
          "*A. Là hàng hoá đặc biệt đóng vai trò là vật ngang giá chung",
          "B. Là phương tiện thanh toán quốc tế",
          "C. Phương tiện để lưu thông hàng hoá và để thanh toán",
          "D. Thước đo giá trị của hàng hoá"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là hàng hoá đặc biệt đóng vai trò là vật ngang giá chung"
          },
          {
            "letter": "B",
            "text": "Là phương tiện thanh toán quốc tế"
          },
          {
            "letter": "C",
            "text": "Phương tiện để lưu thông hàng hoá và để thanh toán"
          },
          {
            "letter": "D",
            "text": "Thước đo giá trị của hàng hoá"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Là hàng hoá đặc biệt đóng vai trò là vật ngang giá chung"
      },
      {
        "q_num": 8,
        "orig_id": 16,
        "title_raw": "Câu 8.[!b:$ Xuất khẩu hàng hoá phát triển mạnh vào giai đoạn nào?$]",
        "clean_text": "Xuất khẩu hàng hoá phát triển mạnh vào giai đoạn nào?",
        "options_raw": [
          "A. Trong thế kỷ 18",
          "B. Cuối thế kỷ 19 - đầu thế kỷ 20",
          "*C. Cuối thế kỷ 18 - thế kỷ 19",
          "D. Từ cuối thế kỷ 17"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Trong thế kỷ 18"
          },
          {
            "letter": "B",
            "text": "Cuối thế kỷ 19 - đầu thế kỷ 20"
          },
          {
            "letter": "C",
            "text": "Cuối thế kỷ 18 - thế kỷ 19"
          },
          {
            "letter": "D",
            "text": "Từ cuối thế kỷ 17"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Cuối thế kỷ 18 - thế kỷ 19"
      },
      {
        "q_num": 9,
        "orig_id": 160,
        "title_raw": "Câu 9.[!b:$ Vai trò mới của ngân hàng trong giai đoạn CNTB độc quyền là:$]",
        "clean_text": "Vai trò mới của ngân hàng trong giai đoạn CNTB độc quyền là:",
        "options_raw": [
          "A. Trung tâm tín dụng",
          "B. Đầu tư tư bản",
          "*C. Khống chế hoạt động của nền kinh tế TBCN",
          "D. Trung tâm thanh toán"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Trung tâm tín dụng"
          },
          {
            "letter": "B",
            "text": "Đầu tư tư bản"
          },
          {
            "letter": "C",
            "text": "Khống chế hoạt động của nền kinh tế TBCN"
          },
          {
            "letter": "D",
            "text": "Trung tâm thanh toán"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Khống chế hoạt động của nền kinh tế TBCN"
      },
      {
        "q_num": 10,
        "orig_id": 147,
        "title_raw": "Câu 10.[!b:$ Nước ta quá độ lên CNXH là tất yếu lịch sử vì:$]",
        "clean_text": "Nước ta quá độ lên CNXH là tất yếu lịch sử vì:",
        "options_raw": [
          "A. Phù hợp với đặc điểm thời đại",
          "B. liền với CNXH E. Phù hợp quy luật phát triển khách quan của lịch sử loài người.",
          "*C. Tất cả các phương án",
          "D. Do cách mạng nước ta phát triển theo con đường độc lập dân tộc gắn"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Phù hợp với đặc điểm thời đại"
          },
          {
            "letter": "B",
            "text": "liền với CNXH E. Phù hợp quy luật phát triển khách quan của lịch sử loài người."
          },
          {
            "letter": "C",
            "text": "Tất cả các phương án"
          },
          {
            "letter": "D",
            "text": "Do cách mạng nước ta phát triển theo con đường độc lập dân tộc gắn"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Tất cả các phương án"
      },
      {
        "q_num": 11,
        "orig_id": 60,
        "title_raw": "Câu 11.[!b:$ Chọn các ý không đúng về sản phẩm và hàng hoá:$]",
        "clean_text": "Chọn các ý không đúng về sản phẩm và hàng hoá:",
        "options_raw": [
          "A. Không phải mọi sản phẩm đều là hàng hoá",
          "B. Mọi hàng hoá đều là sản phẩm",
          "C. Mọi sản phẩm đều là kết quả của sản xuất",
          "*D. Mọi sản phẩm đều là hàng hoá"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Không phải mọi sản phẩm đều là hàng hoá"
          },
          {
            "letter": "B",
            "text": "Mọi hàng hoá đều là sản phẩm"
          },
          {
            "letter": "C",
            "text": "Mọi sản phẩm đều là kết quả của sản xuất"
          },
          {
            "letter": "D",
            "text": "Mọi sản phẩm đều là hàng hoá"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Mọi sản phẩm đều là hàng hoá"
      },
      {
        "q_num": 12,
        "orig_id": 21,
        "title_raw": "Câu 12.[!b:$ Về kinh tế, xuất khẩu tư bản nhà nước thường hướng vào:$]",
        "clean_text": "Về kinh tế, xuất khẩu tư bản nhà nước thường hướng vào:",
        "options_raw": [
          "A. Ngành công nghệ mới",
          "*B. Ngành kết cấu hạ tầng",
          "C. Ngành có lợi nhuận cao",
          "D. Ngành có vốn chu chuyển nhanh"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Ngành công nghệ mới"
          },
          {
            "letter": "B",
            "text": "Ngành kết cấu hạ tầng"
          },
          {
            "letter": "C",
            "text": "Ngành có lợi nhuận cao"
          },
          {
            "letter": "D",
            "text": "Ngành có vốn chu chuyển nhanh"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Ngành kết cấu hạ tầng"
      },
      {
        "q_num": 13,
        "orig_id": 129,
        "title_raw": "Câu 13.[!b:$ Yếu tố nào được xác định là thực thể của giá trị hàng hoá?$]",
        "clean_text": "Yếu tố nào được xác định là thực thể của giá trị hàng hoá?",
        "options_raw": [
          "*A. Lao động trừu tượng",
          "B. Lao động phức tạp",
          "C. Lao động cụ thể",
          "D. Lao động giản đơn"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Lao động trừu tượng"
          },
          {
            "letter": "B",
            "text": "Lao động phức tạp"
          },
          {
            "letter": "C",
            "text": "Lao động cụ thể"
          },
          {
            "letter": "D",
            "text": "Lao động giản đơn"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Lao động trừu tượng"
      },
      {
        "q_num": 14,
        "orig_id": 34,
        "title_raw": "Câu 14.[!b:$ Để có thể tăng quy mô tích luỹ, các nhà tư bản sử dụng nhiều biện pháp. Biện pháp nào đúng?$]",
        "clean_text": "Để có thể tăng quy mô tích luỹ, các nhà tư bản sử dụng nhiều biện pháp. Biện pháp nào đúng?",
        "options_raw": [
          "*A. Tăng m&#39;; Giảm v; Tăng NSLĐ",
          "B. Giảm m’; Giảm v, Tăng NSLĐ",
          "C. Giảm m’; Giảm v; Tăng NSLĐ",
          "D. Tăng m’; Tăng v; Tăng NSLĐ"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tăng m'; Giảm v; Tăng NSLĐ"
          },
          {
            "letter": "B",
            "text": "Giảm m’; Giảm v, Tăng NSLĐ"
          },
          {
            "letter": "C",
            "text": "Giảm m’; Giảm v; Tăng NSLĐ"
          },
          {
            "letter": "D",
            "text": "Tăng m’; Tăng v; Tăng NSLĐ"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Tăng m'; Giảm v; Tăng NSLĐ"
      },
      {
        "q_num": 15,
        "orig_id": 62,
        "title_raw": "Câu 15.[!b:$ Tiêu chí nào không phải là tiêu chí xây dựng nền kinh tế độc lập tự chủ?$]",
        "clean_text": "Tiêu chí nào không phải là tiêu chí xây dựng nền kinh tế độc lập tự chủ?",
        "options_raw": [
          "A. Bảo đảm định hướng XHCN và những giá trị truyền thống văn hoá tốt đẹp của dân tộc trong tiến trình công nghiệp hoá, hiện đại hoá đất nước.",
          "B. Tự chủ lựa chọn mục tiêu, đường lối chiến lược, sách lược phát triển kinh tế - xã hội",
          "C. Nền kinh tế có năng lực cạnh tranh cao, với cơ cấu kinh tế tối ưu, hợp lý, cơ sở hạ tầng phát triển",
          "*D. Nền kinh tế độc lập, không tham gia vào các hoạt động kinh tế đối ngoại"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Bảo đảm định hướng XHCN và những giá trị truyền thống văn hoá tốt đẹp của dân tộc trong tiến trình công nghiệp hoá, hiện đại hoá đất nước."
          },
          {
            "letter": "B",
            "text": "Tự chủ lựa chọn mục tiêu, đường lối chiến lược, sách lược phát triển kinh tế - xã hội"
          },
          {
            "letter": "C",
            "text": "Nền kinh tế có năng lực cạnh tranh cao, với cơ cấu kinh tế tối ưu, hợp lý, cơ sở hạ tầng phát triển"
          },
          {
            "letter": "D",
            "text": "Nền kinh tế độc lập, không tham gia vào các hoạt động kinh tế đối ngoại"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Nền kinh tế độc lập, không tham gia vào các hoạt động kinh tế đối ngoại"
      },
      {
        "q_num": 16,
        "orig_id": 158,
        "title_raw": "Câu 16.[!b:$ Xuất khẩu hàng hoá là đặc điểm của?$]",
        "clean_text": "Xuất khẩu hàng hoá là đặc điểm của?",
        "options_raw": [
          "A. Sản xuất hàng hoá giản đơn",
          "B. Chủ nghĩa tư bản độc quyền",
          "*C. Chủ nghĩa tư bản tự do cạnh tranh",
          "D. Của chủ nghĩa tư bản"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Sản xuất hàng hoá giản đơn"
          },
          {
            "letter": "B",
            "text": "Chủ nghĩa tư bản độc quyền"
          },
          {
            "letter": "C",
            "text": "Chủ nghĩa tư bản tự do cạnh tranh"
          },
          {
            "letter": "D",
            "text": "Của chủ nghĩa tư bản"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Chủ nghĩa tư bản tự do cạnh tranh"
      },
      {
        "q_num": 17,
        "orig_id": 154,
        "title_raw": "Câu 17.[!b:$ V.I.Lênin chia PTSX-CSCN thành mấy giai đoạn$]",
        "clean_text": "V.I.Lênin chia PTSX-CSCN thành mấy giai đoạn",
        "options_raw": [
          "*A. Hai giai đoạn: CNXH và CNCS",
          "B. Bốn giai đoạn: TKQĐ, CNXH, CNXH phát triển và CNCS",
          "C. Bốn giai đoạn: TKQĐ, CNXH, TKQĐ lên CNCS và CNCS",
          "D. Ba giai đoạn: TKQĐ, CNXH và CNCS"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Hai giai đoạn: CNXH và CNCS"
          },
          {
            "letter": "B",
            "text": "Bốn giai đoạn: TKQĐ, CNXH, CNXH phát triển và CNCS"
          },
          {
            "letter": "C",
            "text": "Bốn giai đoạn: TKQĐ, CNXH, TKQĐ lên CNCS và CNCS"
          },
          {
            "letter": "D",
            "text": "Ba giai đoạn: TKQĐ, CNXH và CNCS"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Hai giai đoạn: CNXH và CNCS"
      },
      {
        "q_num": 18,
        "orig_id": 1,
        "title_raw": "Câu 18.[!b:$ Quan niệm về nền kinh tế độc lập tự chủ:$]",
        "clean_text": "Quan niệm về nền kinh tế độc lập tự chủ:",
        "options_raw": [
          "A. Nền kinh tế độc lập tự chủ là nền kinh tế mở cửa, hội nhập, mở rộng và nâng cao hiệu quả kinh tế đối ngoại",
          "B. Nên kinh tế độc lập tự chủ là nền kinh tế hoàn toàn độc lập, không quan hệ với các nước, các tổ chức kinh tế trên thế giới",
          "*C. Nền kinh tế độc lập tự chủ là nền kinh tế không bị chi phối, lệ thuộc vào nước khác hoặc một tổ chức nào về đường lối, chính sách phát triển kinh tế, điều kiện áp đặt có nguy cơ gây tổn hại lợi ích cơ bản của dân tộc, quốc gia",
          "D. Nền kinh tế độc lập tự chủ là chỉ quan hệ với các quốc gia có cùng thể chế chính trị, nằm trong các tổ chức kinh tế quốc tế"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Nền kinh tế độc lập tự chủ là nền kinh tế mở cửa, hội nhập, mở rộng và nâng cao hiệu quả kinh tế đối ngoại"
          },
          {
            "letter": "B",
            "text": "Nên kinh tế độc lập tự chủ là nền kinh tế hoàn toàn độc lập, không quan hệ với các nước, các tổ chức kinh tế trên thế giới"
          },
          {
            "letter": "C",
            "text": "Nền kinh tế độc lập tự chủ là nền kinh tế không bị chi phối, lệ thuộc vào nước khác hoặc một tổ chức nào về đường lối, chính sách phát triển kinh tế, điều kiện áp đặt có nguy cơ gây tổn hại lợi ích cơ bản của dân tộc, quốc gia"
          },
          {
            "letter": "D",
            "text": "Nền kinh tế độc lập tự chủ là chỉ quan hệ với các quốc gia có cùng thể chế chính trị, nằm trong các tổ chức kinh tế quốc tế"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Nền kinh tế độc lập tự chủ là nền kinh tế không bị chi phối, lệ thuộc vào nước khác hoặc một tổ chức nào về đường lối, chính sách phát triển kinh tế, điều kiện áp đặt có nguy cơ gây tổn hại lợi ích cơ bản của dân tộc, quốc gia"
      },
      {
        "q_num": 19,
        "orig_id": 141,
        "title_raw": "Câu 19.[!b:$ Nguyên tắc cơ bản và bao trùm chỉ đạo hội nhập kinh tế quốc tế?$]",
        "clean_text": "Nguyên tắc cơ bản và bao trùm chỉ đạo hội nhập kinh tế quốc tế?",
        "options_raw": [
          "A. Bảo đảm giữ vững độc lập, tự chủ và định hướng XHCN, giữ gìn bản sắc văn hoá dân tộc",
          "B. Bảo đảm giữ vững độc lập, tự chủ và định hướng XHCN, bảo đảm vững chắc an ninh quốc gia",
          "C. Bảo đảm giữ vững độc lập, tự chủ, bảo đảm vững chắc an ninh quốc gia, giữ gìn bản sắc văn hoá dân tộc",
          "*D. Bảo đảm giữ vững độc lập, tự chủ và định hướng XHCN, bảo đảm vững chắc an ninh quốc gia, giữ gìn bản sắc văn hoá dân tộc"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Bảo đảm giữ vững độc lập, tự chủ và định hướng XHCN, giữ gìn bản sắc văn hoá dân tộc"
          },
          {
            "letter": "B",
            "text": "Bảo đảm giữ vững độc lập, tự chủ và định hướng XHCN, bảo đảm vững chắc an ninh quốc gia"
          },
          {
            "letter": "C",
            "text": "Bảo đảm giữ vững độc lập, tự chủ, bảo đảm vững chắc an ninh quốc gia, giữ gìn bản sắc văn hoá dân tộc"
          },
          {
            "letter": "D",
            "text": "Bảo đảm giữ vững độc lập, tự chủ và định hướng XHCN, bảo đảm vững chắc an ninh quốc gia, giữ gìn bản sắc văn hoá dân tộc"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Bảo đảm giữ vững độc lập, tự chủ và định hướng XHCN, bảo đảm vững chắc an ninh quốc gia, giữ gìn bản sắc văn hoá dân tộc"
      },
      {
        "q_num": 20,
        "orig_id": 27,
        "title_raw": "Câu 20.[!b:$ Nếu nhà tư bản trả công theo đúng giá trị sức lao động thì có còn bóc lột giá trị thặng dư không?$]",
        "clean_text": "Nếu nhà tư bản trả công theo đúng giá trị sức lao động thì có còn bóc lột giá trị thặng dư không?",
        "options_raw": [
          "A. Bị lỗ vốn",
          "B. Không",
          "C. Hoà vốn",
          "*D. Có"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Bị lỗ vốn"
          },
          {
            "letter": "B",
            "text": "Không"
          },
          {
            "letter": "C",
            "text": "Hoà vốn"
          },
          {
            "letter": "D",
            "text": "Có"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Có"
      },
      {
        "q_num": 21,
        "orig_id": 143,
        "title_raw": "Câu 21.[!b:$ Tác động của toàn cầu hoá kinh tế đến Việt Nam?$]",
        "clean_text": "Tác động của toàn cầu hoá kinh tế đến Việt Nam?",
        "options_raw": [
          "A. Tác động tích cực",
          "*B. Cả tác động tích cực và tiêu cực",
          "C. Không tác động",
          "D. Tác động tiêu cực"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tác động tích cực"
          },
          {
            "letter": "B",
            "text": "Cả tác động tích cực và tiêu cực"
          },
          {
            "letter": "C",
            "text": "Không tác động"
          },
          {
            "letter": "D",
            "text": "Tác động tiêu cực"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Cả tác động tích cực và tiêu cực"
      },
      {
        "q_num": 22,
        "orig_id": 103,
        "title_raw": "Câu 22.[!b:$ Chọn ý đúng về đặc điểm của giá trị thặng dư siêu ngạch trong sản xuất công nghiệp?$]",
        "clean_text": "Chọn ý đúng về đặc điểm của giá trị thặng dư siêu ngạch trong sản xuất công nghiệp?",
        "options_raw": [
          "*A. Chỉ có ở doanh nghiệp có năng suất cá biệt cao hơn năng suất lao động xã hội",
          "B. Có ở tất cả các doanh nghiệp",
          "C. Chỉ có ở những doanh nghiệp lớn",
          "D. Chỉ có ở những doanh nghiệp nhỏ, dễ dàng thay đổi và thích nghi"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Chỉ có ở doanh nghiệp có năng suất cá biệt cao hơn năng suất lao động xã hội"
          },
          {
            "letter": "B",
            "text": "Có ở tất cả các doanh nghiệp"
          },
          {
            "letter": "C",
            "text": "Chỉ có ở những doanh nghiệp lớn"
          },
          {
            "letter": "D",
            "text": "Chỉ có ở những doanh nghiệp nhỏ, dễ dàng thay đổi và thích nghi"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Chỉ có ở doanh nghiệp có năng suất cá biệt cao hơn năng suất lao động xã hội"
      },
      {
        "q_num": 23,
        "orig_id": 58,
        "title_raw": "Câu 23.[!b:$ Lượng giá trị của đơn vị hàng hoá:$]",
        "clean_text": "Lượng giá trị của đơn vị hàng hoá:",
        "options_raw": [
          "A. Tỷ lệ thuận với cường độ lao động",
          "*B. Không phụ thuộc vào cường độ lao động",
          "C. Tỷ lệ nghịch với cường độ lao động",
          "D. Cố định trong mọi điều kiện"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Tỷ lệ thuận với cường độ lao động"
          },
          {
            "letter": "B",
            "text": "Không phụ thuộc vào cường độ lao động"
          },
          {
            "letter": "C",
            "text": "Tỷ lệ nghịch với cường độ lao động"
          },
          {
            "letter": "D",
            "text": "Cố định trong mọi điều kiện"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Không phụ thuộc vào cường độ lao động"
      },
      {
        "q_num": 24,
        "orig_id": 126,
        "title_raw": "Câu 24.[!b:$ Lao động trừu tượng là nguồn gốc của?$]",
        "clean_text": "Lao động trừu tượng là nguồn gốc của?",
        "options_raw": [
          "A. Cả giá trị và giá trị sử dụng của hàng hoá",
          "*B. Giá trị hàng hoá",
          "C. Của giá trị sử dụng của hàng hoá",
          "D. Của tính hữu ích của hàng hoá"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Cả giá trị và giá trị sử dụng của hàng hoá"
          },
          {
            "letter": "B",
            "text": "Giá trị hàng hoá"
          },
          {
            "letter": "C",
            "text": "Của giá trị sử dụng của hàng hoá"
          },
          {
            "letter": "D",
            "text": "Của tính hữu ích của hàng hoá"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Giá trị hàng hoá"
      },
      {
        "q_num": 25,
        "orig_id": 132,
        "title_raw": "Câu 25.[!b:$ Thế nào là lao động giản đơn:$]",
        "clean_text": "Thế nào là lao động giản đơn:",
        "options_raw": [
          "A. Là lao động chỉ làm một công đoạn của quá trình tạo ra hàng hoá",
          "B. Là lao động làm công việc đơn giản",
          "C. Là lao động làm ra các hàng hoá chất lượng không cao",
          "*D. Là lao động không cần trải qua đào tạo"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Là lao động chỉ làm một công đoạn của quá trình tạo ra hàng hoá"
          },
          {
            "letter": "B",
            "text": "Là lao động làm công việc đơn giản"
          },
          {
            "letter": "C",
            "text": "Là lao động làm ra các hàng hoá chất lượng không cao"
          },
          {
            "letter": "D",
            "text": "Là lao động không cần trải qua đào tạo"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Là lao động không cần trải qua đào tạo"
      },
      {
        "q_num": 26,
        "orig_id": 82,
        "title_raw": "Câu 26.[!b:$ Nguyên nhân dẫn đến CNTB ngày nay xuất hiện nhiều doanh nghiệp vừa và nhỏ?$]",
        "clean_text": "Nguyên nhân dẫn đến CNTB ngày nay xuất hiện nhiều doanh nghiệp vừa và nhỏ?",
        "options_raw": [
          "A. Doanh nghiệp vừa và nhỏ dễ đổi mới trang thiết bị kỹ thuật",
          "B. Các doanh nghiệp vừa và nhỏ thích ứng nhanh với biến động của thị trường",
          "C. Lực lượng sản xuất phát triển cho phép chuyên môn hoá sản xuất sâu",
          "*D. Tất cả các đáp án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Doanh nghiệp vừa và nhỏ dễ đổi mới trang thiết bị kỹ thuật"
          },
          {
            "letter": "B",
            "text": "Các doanh nghiệp vừa và nhỏ thích ứng nhanh với biến động của thị trường"
          },
          {
            "letter": "C",
            "text": "Lực lượng sản xuất phát triển cho phép chuyên môn hoá sản xuất sâu"
          },
          {
            "letter": "D",
            "text": "Tất cả các đáp án"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Tất cả các đáp án"
      },
      {
        "q_num": 27,
        "orig_id": 113,
        "title_raw": "Câu 27.[!b:$ Các cách diễn tả giá trị hàng hoá dưới đây, cách nào đúng?$]",
        "clean_text": "Các cách diễn tả giá trị hàng hoá dưới đây, cách nào đúng?",
        "options_raw": [
          "A. Giá trị hàng hoá = c + v + m + p",
          "*B. Giá trị hàng hoá = c + v + m= giá trị cũ + giá trị mới",
          "C. Giá trị hàng hoá = C + m + p",
          "D. Giá trị hàng hoá = c + v + k + p"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Giá trị hàng hoá = c + v + m + p"
          },
          {
            "letter": "B",
            "text": "Giá trị hàng hoá = c + v + m= giá trị cũ + giá trị mới"
          },
          {
            "letter": "C",
            "text": "Giá trị hàng hoá = C + m + p"
          },
          {
            "letter": "D",
            "text": "Giá trị hàng hoá = c + v + k + p"
          }
        ],
        "correct_letter": "B",
        "correct_text": "Giá trị hàng hoá = c + v + m= giá trị cũ + giá trị mới"
      },
      {
        "q_num": 28,
        "orig_id": 151,
        "title_raw": "Câu 28.[!b:$ V.I.Lênin nêu ra mấy thành phần kinh tế trong TKQĐ ở nước Nga?$]",
        "clean_text": "V.I.Lênin nêu ra mấy thành phần kinh tế trong TKQĐ ở nước Nga?",
        "options_raw": [
          "A. Ba thành phần",
          "B. Bốn thành phần",
          "C. Hai thành phần",
          "*D. Năm thành phần"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Ba thành phần"
          },
          {
            "letter": "B",
            "text": "Bốn thành phần"
          },
          {
            "letter": "C",
            "text": "Hai thành phần"
          },
          {
            "letter": "D",
            "text": "Năm thành phần"
          }
        ],
        "correct_letter": "D",
        "correct_text": "Năm thành phần"
      },
      {
        "q_num": 29,
        "orig_id": 87,
        "title_raw": "Câu 29.[!b:$ Trong giai đoạn CNTB độc quyền$]",
        "clean_text": "Trong giai đoạn CNTB độc quyền",
        "options_raw": [
          "A. Quy luật giá trị lúc hoạt động, lúc không hoạt động",
          "B. Quy luật giá trị hoạt động kém hiệu quả",
          "*C. Quy luật giá trị vẫn hoạt động",
          "D. Quy luật giá trị không còn hoạt động"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quy luật giá trị lúc hoạt động, lúc không hoạt động"
          },
          {
            "letter": "B",
            "text": "Quy luật giá trị hoạt động kém hiệu quả"
          },
          {
            "letter": "C",
            "text": "Quy luật giá trị vẫn hoạt động"
          },
          {
            "letter": "D",
            "text": "Quy luật giá trị không còn hoạt động"
          }
        ],
        "correct_letter": "C",
        "correct_text": "Quy luật giá trị vẫn hoạt động"
      },
      {
        "q_num": 30,
        "orig_id": 31,
        "title_raw": "Câu 30.[!b:$ Các quan hệ dưới đây, hãy nhận dạng quan hệ nào thuộc phạm trù cấu tạo hữu cơ của tư bản?$]",
        "clean_text": "Các quan hệ dưới đây, hãy nhận dạng quan hệ nào thuộc phạm trù cấu tạo hữu cơ của tư bản?",
        "options_raw": [
          "*A. Quan hệ giữa tư bản bất biến và tư bản khả biến",
          "B. Phản ánh mặt hiện vật của tư bản và mặt giá trị của tư bản",
          "C. Quan hệ giữa TLSX và sức lao động sử dụng TLSX đó",
          "D. Tất cả các phương án"
        ],
        "choices": [
          {
            "letter": "A",
            "text": "Quan hệ giữa tư bản bất biến và tư bản khả biến"
          },
          {
            "letter": "B",
            "text": "Phản ánh mặt hiện vật của tư bản và mặt giá trị của tư bản"
          },
          {
            "letter": "C",
            "text": "Quan hệ giữa TLSX và sức lao động sử dụng TLSX đó"
          },
          {
            "letter": "D",
            "text": "Tất cả các phương án"
          }
        ],
        "correct_letter": "A",
        "correct_text": "Quan hệ giữa tư bản bất biến và tư bản khả biến"
      }
    ]
  }
];
