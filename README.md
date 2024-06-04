## Turorial Run ##
Document: https://docs.google.com/document/d/17dZnKYfcwUOW4F7rXK40jRomqnyUQ1FJl01Kzy0ICyY/edit
Video demo: https://www.youtube.com/watch?v=RQsP_Zet-eo



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

## Task 1: Requirement elicitation
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

### 1.3 Use-case Diagram
#### Toàn bộ hệ thống:
![image](https://github.com/NgKoaz/SE_Assignment/assets/146020231/90223169-e491-46e8-911a-2665cb2a8d8e)
#### Module nhóm chọn:
![image](https://github.com/NgKoaz/SE_Assignment/assets/146020231/93491872-d1f5-4716-8ead-6416cbe7c2e0)

## Task 2: System modeling
### 2.1 Activity Diagram
#### Print Documents use-case
\
![image](https://github.com/NgKoaz/SE_Assignment/assets/146020231/7ce653a7-f101-41d7-b56b-ff6da4684f8e)
\
Mô tả: 
- Ta bắt đầu ở dấu chấm tròn có chữ Start.
- “In tài liệu” (người dùng nhấn vào nút “In tài liệu”) để bắt đầu việc in ấn, rồi người dùng tiếp tục tải tài liệu mà mình cần in lên hệ thống (activity “Tải tệp lên”).
- Tiếp đến là activity của hệ thống, hệ thống sẽ kiểm tra xem tệp in xem có hợp lệ hay không, nếu tệp in không hợp lệ thì sẽ quay về activity “Tải tệp lên” và người dùng sẽ phải thực hiện lại bước này, còn nếu tệp tin là hợp lệ thì sẽ chuyển đến activity tiếp theo
- “Chọn máy in”, hệ thống sẽ chọn máy in thích hợp cho người dùng theo tiêu chí là gần người dùng nhất có thể.
- “Thiết lập in”, tại đây nếu người dùng không thỏa điều kiện nào về thiết lập in (cụ thể là thiếu giấy in):
  * Thì người dùng sẽ phải thực hiện thêm một bước là mua giấy in rồi tiến hành thiết lập in lại từ đầu
  * Còn trường hợp người dùng đáp ứng đầy đủ các điều kiện của thiết lập in mình chọn thì hệ thống sẽ “Hiển thị yêu cầu in” để người dùng kiểm tra lại một lần nữa thông tin in ấn của mình.
- Nếu đúng với nhu cầu của người dùng thì người dùng tiến hành bấm nút “Xác nhận in” để chuyển đến hoạt động tiếp theo là hệ thống sẽ “Gửi yêu cầu in” đến máy in, lúc này máy in tiến hành in
  * Nếu in thành công, thì hệ thống sẽ “Cập nhật lại số dư giấy in” của người dùng rồi sau đó “Ghi nhận lịch sử in” rồi kết thúc hoạt động
  * Nếu in không thành công thì hệ thống sẽ chỉ “Ghi nhận lịch sử in” rồi kết thúc hoạt động.

#### Buy Papers use-case:
\
![image](https://github.com/NgKoaz/SE_Assignment/assets/146020231/52808491-84c6-4c99-a46c-d2284b9a614c)
\
Mô tả:
- Ta bắt đầu ở dấu chấm tròn có chữ Start.
- “Mua thêm giấy” (người dùng nhấn vào nút “Mua thêm giấy”), cửa sổ mua thêm giấy hiện ra thì người dùng tiến hành “Điền số lượng giấy cần mua”
- Hệ thống sẽ tiến hành “Tạo yêu cầu mua giấy” rồi gửi về cho người dùng để người dùng “Xác nhận yêu cầu mua giấy” (người dùng tiến hành kiểm tra yêu cầu mua giấy của mình và bấm nút xác nhận)
- BKPay sẽ “Tạo hóa đơn” thanh toán và gửi về cho người dùng để người dùng tiến hành “Kiểm tra và thanh toán”, sau khi đã kiểm tra thông tin thanh toán xong thì người dùng bấm vào nút thanh toán
- BKPay sẽ “Tiến hành thanh toán” giống như cách chúng ta đóng học phí.
  * Nếu thanh toán thành công, hệ thống sẽ “Cập nhật số dư trang in” đồng thời “Lưu hóa đơn” lại trong
tài khoản của chúng ta và sau đó kết thúc hoạt động.
  * Nếu thanh toán không thành công thì hệ thống sẽ thông báo là giao dịch thất bại và sẽ không ghi nhận
hóa đơn mua của người dùng.
- Trường hợp người dùng hủy thanh toán ngay sau hoạt động “Kiểm tra và thanh toán” thì hệ thống cũng sẽ làm tương tự như trường hợp thanh toán không thành công.

### 2.2 Sequence Diagram    
#### Print Documents Use-case:
![2 2](https://github.com/NgKoaz/SE_Assignment/assets/146020231/ab93c372-6972-4a89-a00b-d4b29355cc73) \
Mô tả: 
- Khi bắt đầu vào chế độ in, hệ thống mặc định sẽ cho phép người dùng tải tệp tin mới. Nếu người dùng muốn sử dụng lại những tệp tin đã tải lên hệ thống trước đó thì hệ thống có thể đưa ra danh sách những tệp tin cũ để người dùng có thể chọn lựa.
- Hệ thống sẽ tự chọn máy in cho người dùng. Người dùng vẫn có thể chọn máy in khác nếu không muốn sử dụng máy in hệ thống chọn tự động. Khi đó hệ thống sẽ trả về trạng thái của các máy in và đợi người dùng đưa ra đề nghị chọn máy in.
- Sau khi tiếp nhận đề nghị hệ thống sẽ xử lý và trả về xác nhận.
- Người dùng sẽ được xem trước tệp tin trước khi in và xác nhận in.
- Hệ thống sẽ kiểm tra lại yêu cầu in của người dùng và đối chiếu với số giấy hiện có.
  * Nếu người dùng đủ giấy thì hệ thống sẽ gửi yêu cầu tới máy in được chỉ định, máy in thực hiện in và trả về trạng thái in với hệ thống. Sau khi lưu lại lịch sử in thì hệ thống sẽ thông báo về người dùng.
  * Nếu người dùng không đủ giấy, hệ thống sẽ gửi yêu cầu mua giấy. Người dùng đồng ý mua giấy sẽ được chuyển đến Buy Paper use-case.
#### Buy Papers Use-case
![2 2a](https://github.com/NgKoaz/SE_Assignment/assets/146020231/68585b41-4858-47df-b381-d21227ad31b2) \
Mô tả:
- Sau khi người dùng chọn chức năng Mua thêm giấy, hệ thống sẽ yêu cầu người dùng nhập số lượng giấy cần mua và xác nhận mua.
- Trước khi chuyển thông tin đơn hàng đến BKPay thì hệ thống sẽ thực hiện kiểm tra số lượng giấy người dùng nhập vào có hợp lệ không.
  * Nếu không hợp lệ, hệ thống sẽ yêu cầu người dùng nhập lại.
  * Nếu hợp lệ thì chuyển sang bước tiếp theo
- BKPay tiếp nhận đơn hàng, BKPay sẽ trả về xác nhận đơn hàng và để người dùng thực hiện giao dịch.
- Sau khi hoàn thành giao dịch BKPay sẽ gửi xác nhận về hệ thống để hệ thống cập nhật lại lượng giấy trong tài khoản người dùng đó.

### 2.3 Class Diagram
![2 3](https://github.com/NgKoaz/SE_Assignment/assets/146020231/6be24496-e7d3-44d6-ac79-83fb7d9a731d)

### 2.4 MVP
Nhóm sử dụng figma làm framework để vẽ UI. Workspace của nhóm: https://www.figma.com/proto/w6UphaIw49gSuS4AbHJeKX/CNPM-team-library?type=design&node-id=2346-6316&t=VZxZZ9dQGLljNqzn-1&scaling=contain&page-id=0%3A1&starting-point-node-id=2346%3A6225&mode=design   \
\
![home](https://github.com/NgKoaz/SE_Assignment/assets/146020231/398b2095-c514-49ba-9358-67ffbe309c6f)


## Task 3: Architecture design
### 3.1: Kiến trúc lớp
![3 1](https://github.com/NgKoaz/SE_Assignment/assets/146020231/b3352756-05f9-4f04-825a-79f0f188d4c9)
Ở tầng User interface, nhóm tạo giao diện trên website để sinh viên dễ dàng truy cập và đưa ra các yêu cầu in tài liệu. Trong đó, các chức năng cơ bản như In tài liệu, Mua thêm giấy đều được hiển thị rõ ràng trên thanh điều hướng. Ngoài ra còn có các chức năng phụ khác như Xem lại lịch sử in, Xem thông tin cá nhân,. . . sẽ được bố trí ở những vị trí dễ tìm trên giao diện người dùng. \
\
Khi sinh viên tải file lên thì hệ thống sẽ lưu file vào bộ nhớ tạm thời dành riêng cho tài khoản của sinh viên đó. Nếu sinh viên muốn in lại file tài liệu đó thì hệ thống sẽ truy cập vào bộ nhớ cấp cho tài khoản đó và đưa ra các file có sẵn trong đó. Ngoài ra hệ thống còn tự động thu thập dữ liệu để tạo các báo cáo định kỳ (chức năng Report generation). \
\
Trong hệ thống này, nhóm có liên với 2 hệ thống bên ngoài. Cụ thể là hệ thống xác thực tài khoản SSO ở tầng Authentication and authorization và hệ thống thanh toán BKPay ở tầng Application functionality. Để liên kết các API khác thì trước hết cần phải xác định rõ API đó sẽ đảm nhận chức năng gì và ở tầng nào để có thể thêm vào hệ thống. Có thể sẽ phải viết thêm module cho hệ thống để có thể sử dụng các API đó. Còn các hệ thống bên ngoài mà nhóm liên kết trong hệ thống này đều được sử dụng để hỗ trợ các chức năng chính khác của hệ thống. SSO hỗ trợ chức năng Login và Grant permission, trong khi đó BKPay sẽ thực hiện thanh toán sau khi chức năng Buy paper đã tạo xong yêu cầu mua giấy.

### 3.2: Component Diagram
#### Buy Papers Use-case:
![3 2](https://github.com/NgKoaz/SE_Assignment/assets/146020231/38909bba-c333-48f6-a007-5afd43415857) \
Mô tả: \
Có 3 component chính đó là User, Order và Payment, component User cần thông tin từ chính tài khoản mà người dùng đó đang sử dụng chính vì vậy cần thêm require là Account và provided cho yêu cầu đó sẽ được thực
hiện bởi việc cập nhật thông tin hay đăng kí thông tin lúc tạo tài khoản của người dùng. \
\
Component User này sẽ cung cấp (provide) cho component Order về thông tin của người đang thực hiện mua thêm giấy in, từ đó để component Payment sẽ có thông tin để tạo hóa đơn một cách chính xác nhất. Như vậy, component sẽ có require là OrderInfor, nơi để người dùng nhập vào số giấy cần mua và component sẽ có require là PaymentDetail, tức là thông tin đầy đủ của việc mua thêm giấy in bao gồm cả số giấy cần mua và thông tin từ người dùng.
\
#### Print Documents Use-case:
![3 2a](https://github.com/NgKoaz/SE_Assignment/assets/146020231/8913bff1-a591-42a3-a98c-aba54b1586bf) \
Mô tả: \
Có 4 component chính là User, PrintRequest, PrintService và PrintHistory. Cũng như module Buy Paper thì việc tiến hành yêu cầu in ấn này (component PrintRequest) sẽ cần biết thông tin về người đang thực hiện in ấn thông qua chính tài khoản của họ. Sau khi đã thực hiện đầy đủ các bước như tải tài liệu lên và thiết lập xong cấu hình in ấn thì người dùng sẽ bấm nút xác nhận in, cũng chính là provide cho component PrintService. Sau khi đã nhận được yêu cầu xác nhận in thì component PrintService sẽ thực hiện việc in ấn tài liệu đã được yêu cầu và sau đó tiến hành lưu lại thông tin in ấn của User (component PrintHistory).


## Task 4 and 5: Implementation
### Thiết lập không gian làm việc và quản lý
Nhóm đã thống nhất chọn Github làm àm nền tảng quản lý và phát triển dự án. \
Workspace của nhóm: https://github.com/NgKoaz/SE_Assignment 

  


