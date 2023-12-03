# SE_Assignment - HK231
**Team** Nhóm 06\
**Task 1**  Requirement elicitation\
**Task 2**  System modeling\
**Task 3**  Architecture design\
**Task 4**  Implementation - Sprint 1\
**Task 5**  Implementation - Sprint 2

## Members
- Lã Minh Đức - 2110132 
- Trần Minh Khoa - 2110278
- Bùi Đức Hải - 2111132
- Nguyễn Lê Phúc - 2112048 
- Phạm Anh Kiệt - 2110304
- Trần Hoàng Nhật Huy  -  2011291
- Nguyễn Đăng Khoa  -  2113760

## Task 1
### 1.1 Mô tả dự án
#### Bối cảnh và thực trạng:
\
Đứng trước việc các tiệm in ấn tài liệu xung quanh trường học và ký túc xá đang ngày càng tăng giá dịch vụ cũng như là phải chờ đợi rất lâu để chờ đến lượt in hoặc muốn được in thì phải gửi trước tài liệu từ 1 đến 2 tiếng trước khi lấy, trường Đại học Bách Khoa - ĐHQG Thành phố Hồ Chí Minh dự định sẽ xây dựng một "Hệ thống in ấn thông minh" (HCMUT_SPSS) quanh khuôn viên trường để phục vụ việc in ấn tài liệu cho sinh viên.

#### Sơ lược về dự án:
\
Hệ thống gồm nhiều máy in dọc theo khuôn viên trường. Trong đó mỗi máy in sẽ có các thuộc tính nhận dạng như:
- Mã máy in (ID)
- Tên thương hiệu/ nhà sản xuất máy in
- Mẫu máy in
- Mô tả ngắn về máy in
- Vị trí máy in được đặt (có thể là tên tòa, tên phòng,...)

Hệ thống cho phép sinh viên in tài liệu của mình bằng cách tải tệp in (được "người quản lí hệ thống" (SPSO) cho phép) lên hệ thống, chọn máy in và tiến hành điều chỉnh các thông số in như:
- Khổ giấy in mong muốn
- Số trang cần in
- In một/hai mặt
- Số bản sao cần in
- ...

Hệ thống sẽ ghi lại các thao tác in ấn của sinh viên bao gồm: Mã số sinh viên, mã máy in, tên tệp in, thời gian in, số trang in cho mỗi khổ giấy in.\
Vào mỗi học kì thì trường sẽ cấp cho mỗi sinh viên một lượng giấy in nhất định. Sinh viên được phép mua thêm giấy in tùy theo nhu cầu của mình thông qua tính năng "Buy Printing Pages" và thực hiện thanh toán thông qua BKPay tương tự như việc thanh toán học phí. Hệ thống chỉ cho phép sinh viên in khi và chỉ khi sinh viên đó còn số lượng trang in khả dụng bằng hoặc hơn số lượng trang sinh viên cần in.

Ngoài ra SPSO còn có một số chức năng đặc quyền như có thể thêm/bật/tắt một máy in bất kì, quản lý việc cấu hình của hệ thống như thay đổi số trang in mặc định, ngày hệ thống cập nhật trang in cho sinh viên, quản lý các định dạng tệp in được cho phép.

Các báo cáo về việc sử dụng hệ thống in được tạo tự động vào cuối mỗi tháng và mỗi năm và được lưu trữ trong hệ thống và SPSO có thể xem bất cứ lúc nào.

#### Đối tượng của dự án:

- Sinh viên: sử dụng dịch vụ in ấn
- SPSO: quản lý và bảo trì, giám sát dịch vụ in ấn
- Trường: cung cấp dịch vụ in ấn

#### Nhu cầu của các đối đượng:

- Sinh viên:cần một hệ thống in thân thiện với người dùng, cho phép họ dễ dàng tải tài liệu lên, chọn các tùy chọn in phù hợp và truy cập và sử dụng dịch vụ in trong toàn khuôn viên trường, cần theo dõi được việc sử dụng in ấn của mình, đặc biệt là việc phân bổ số lượng trang mặc định cho học kỳ và khả năng mua thêm trang khi thiếu trang in, đảm bảo khả năng chi trả và khả năng tiếp cận các dịch vụ in ấn, vì điều này ảnh hưởng trực tiếp đến việc học tập của họ.
- SPSO: đóng vai trò quan trọng trong việc quản lý và bảo trì hệ thống. Họ cần các công cụ hiệu quả để giám sát hoạt động in, quản lý máy in và cấu hình cài đặt hệ thống như những kiểu in được cho phép và phân bổ trang mặc định, cần khả năng tạo báo cáo để kiểm tra và giám sát việc sử dụng hệ thống, đặc biệt là vào cuối mỗi tháng và năm.
- Trường: cung cấp cho sinh viên một dịch vụ tiện ích, nâng cao tính tương tác giữa sinh viên và trường học, đồng thời đảm bảo rằng hệ thống góp phần tiết kiệm chi phí về mặt giấy in và tài nguyên, kiểm soát tính khả dụng và cấu hình của máy in để duy trì môi trường in ấn an toàn và hiệu quả.

#### Lợi ích của các đối tượng khi sử dụng dịch vụ:

- Sinh viên: có thể in ấn mọi lúc mọi nơi trong khuôn viên trường một cách nhanh chóng, có thể theo dõi việc sử dụng in ấn của mình và có thể mua thêm trang nếu cần, giảm gánh nặng tài chính cho việc in ấn.
- SPSO: Hệ thống hợp lý hóa việc quản lý máy in, tài khoản người dùng và cấu hình hệ thống, giảm khối lượng công việc quản trị, cung cấp nhật ký và báo cáo chi tiết để kiểm tra và giúp tối ưu hóa việc phân bổ nguồn lực, nâng cao hiệu quả của các dịch vụ in ấn.
- Trường: giúp trường phân bổ nguồn lực in ấn hiệu quả hơn, giảm lãng phí giấy, góp phần tiết kiệm chi phí và phù hợp với các mục tiêu tài chính và môi trường của trường đại học.

### 1.2 Yêu cầu chức năng và phi chức năng
#### Yêu cầu chức năng:

Cho phép tất cả mọi người có thể xem trạng thái của từng máy in và mức giấy trong máy in.
- Sinh viên:
  * File Upload: Hệ thống cho phép sinh viên tải nhiều loại file cần in lên hệ thống.
  * Printer Selection: Sinh viên có thể chọn máy in.
  * Automated Job Routing: Hệ thống ưu tiên chọn máy in đủ giấy và đang hoạt động.
  * Notifications: Báo hiệu cho người dùng khi máy in hiện tại đã hết giấy hoặc in quá số giấy mà máy in có, hệ thống sẽ đề xuất máy in thay thế.
  * User Guidance: Cung cấp một bộ hướng dẫn để cho người dùng hiểu cách sử dụng.
  * Purchase and Payment: Cho phép người dùng mua giấy, và sẽ được thanh toán qua hệ thống BKPay.
  * Feedback: Cho phép người dùng phản hồi và góp ý với nhà trường.
  * Printing History: Cho phép người dùng xem lịch sử in ấn trong vòng một thời gian.
  * Print Preview: Xem trước khi in, tránh bị lỗi định dạng.
  * Queue Management: Cho phép người dùng xem số người đang chọn máy in và ước tính thời gian chờ.
  * Checking Remaining Papers: Xem lượng giấy được phép in của sinh viên.
  * Student Support: Hỗ trợ, giải đáp thắc mắc sinh viên về vấn đề in ấn.
- SPSO:
  * Printer Management: SPSO phải có khả năng thêm máy in vào hệ thống, và cho phép hoặc không cho phép máy in hoạt động.
  * Configuration Control: Cho phép cài đặt cấu hình hệ thống như là kiểu tệp cho phép tải lên, số trang được trường phân bổ cho sinh viên, chi phí mua thêm giấy.
  * Alerts and Notification: Nhận thông báo khi máy in đạt đến ngưỡng thấp hoặc đến hạn bảo trì hệ thống.
  * Printing History: Cho phép SPSO xem tất cả lịch sử in của tất cả học sinh và lịch sử in của các máy in trong vòng một thời gian.
  * Report Generations: Hệ thống sẽ tự động tạo báo cáo tình hình sử dụng hệ thống in để phân tích và kiểm tra.
- Trường:
  * User Authentication: Hệ thống sẽ xác thực người dùng bằng dịch vụ xác thực HCMUT-SSO trước khi sử dụng hệ thống.
  * Finance Reporting: Cho phép xem báo cáo tài chính, theo dõi ngân sách.
  * Granting permission: Cho phép phân quyền người dùng.
  * Helpdesk Support Oversight: Cung cấp hệ thống theo dõi các câu hỏi mà sinh viên đặt ra nhằm để trường giải đáp thắc mắc kịp thời cho sinh viên.

#### Yêu cầu phi chức năng:

- Sinh viên:
  * Performance: Hệ thống phải phản hồi nhanh khi người dùng gửi lệnh in, giảm tối thiểu thời gian xử lý yêu cầu in. Ứng dụng có độ trễ thấp, cho người dùng có trải nghiệm mượt mà.
  * Availability: Có thể đáp ứng việc in ấn của sinh viên 24/7, ngay cả vào cuối tuần.
- SPSO:
  * Security: Quyền truy cập vào những chức năng và dữ liệu của SPSO cần phải được bảo vệ tránh truy cập trái phép.
  * Performance: Giao diện dành cho SPSO phải tối ưu về mặt hiệu năng, cho phép việc quản lý, cấu hình các máy in hiệu quả.
  * Auditability: Hệ thống duy trì nhật ký chi tiết về hành động của SPSO.
  * Automated Printer Status Handling: Hệ thống tự động bật - tắt khi hết giấy hoặc khi quá giờ mà trường cho hoạt động.
- Trường:
  * Security: Có mọi quyền truy cập và chỉnh sửa hệ thống
  * Data Retention: Hệ thống phải đảm bảo việc lưu giữ lịch sử in, các bản ghi tài chính, nhật ký thay đổi cấu hình.
  * Reliability: Các thủ tục về sao lưu và phục hồi dữ liệu phải được thiết lập để bảo vệ dữ liệu và duy trì tính liên tục của hệ thống.


    
           


