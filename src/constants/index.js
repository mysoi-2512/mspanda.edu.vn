import { facebook, instagram, youtube } from "../assets/icons";
import { customer1, customer2 } from "../assets/images";
import { course1, course2, course3, course4, course5, course6, course7 } from '../assets/images';
import { star, manage, skill, notification, heart, exam } from '../assets/images';
import { classImage } from "../assets/images";


export const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "#gioi-thieu", label: "Giới thiệu" },
    { href: "#khoa-hoc", label: "Các khóa học" },
    { href: "#lien-he", label: "Liên hệ" },
];

export const statistics = [
    { value: '11+', label: 'Năm giảng dạy' },
    { value: '1000+', label: 'Học viên' },
    { value: '95%', label: 'Học viên quay lại' },
];

export const courses = [
    {
        imgURL: course1,
        name: "Tiếng anh Tiểu học",
        link: "/tieu-hoc"
    },
    {
        imgURL: course2,
        name: "Tiếng anh THCS/THPT",
        link: "/thcs-thpt"
    },
    {
        imgURL: course3,
        name: "Luyện thi Lớp 10",
        link: "/lop10"
    },
    {
        imgURL: course4,
        name: "Luyện thi Đại học",
        link: "/daihoc"
    },
    {
        imgURL: course5,
        name: "Luyện thi Cambridge",
        link: "/cambridge"
    },
    {
        imgURL: course6,
        name: "Luyện thi TOEIC/ IELTS",
        link: "/toeic-ielts"
    },
    {
        imgURL: course7,
        name: "Tiếng anh giao tiếp",
        link: "/giao-tiep"
    },
];

export const points = [
    {
        imgURL: star,
        label: "Học linh hoạt từ online đến offline",
        subtext: "Đa dạng hình thức giúp học sinh dễ dàng lựa chọn"
    },
    {
        imgURL: heart,
        label: "Không khí lớp học vui vẻ gần gũi",
        subtext: "Luôn hỗ trợ và giúp đỡ học sinh hòa nhập với tốc độ học của lớp."
    },
    {
        imgURL: exam,
        label: "Luôn theo sát học sinh",
        subtext: "Các bài tập online, bài thi đánh giá năng lực được cập nhật liên tục."
    },
    {
        imgURL: skill,
        label: "Phát triển năng lực một cách toàn diện",
        subtext: "Các kỹ năng nghe-nói-đọc-viết và phản xạ giao tiếp."
    },
    {
        imgURL: manage,
        label: "Quản lý học sinh bằng tài khoản",
        subtext: "Luôn cập nhật bảng thống kê và đánh giá theo các buổi, các tuần."
    },
    {
        imgURL: notification,
        label: "Phụ huynh dễ dàng theo dõi tiến trình học tập",
        subtext: "Sử dụng thông báo điểm danh online"
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];

export const classImages = [
    {
        imgURL: classImage,
        alt: "Hình ảnh lớp học Ms.Panda"
    },
    {
        imgURL: classImage,
        alt: "Hình ảnh lớp học Ms.Panda"
    },
    {
        imgURL: classImage,
        alt: "Hình ảnh lớp học Ms.Panda"
    },
    {
        imgURL: classImage,
        alt: "Hình ảnh lớp học Ms.Panda"
    },
    {
        imgURL: classImage,
        alt: "Hình ảnh lớp học Ms.Panda"
    },
    {
        imgURL: classImage,
        alt: "Hình ảnh lớp học Ms.Panda"
    },
    {
        imgURL: classImage,
        alt: "Hình ảnh lớp học Ms.Panda"
    },
    {
        imgURL: classImage,
        alt: "Hình ảnh lớp học Ms.Panda"
    }
];


export const footerLinks = [
    {
        title: "Ms. Panda English",
        links: [
            { name: "Trang chủ", link: "/"},
            { name: "Giới thiệu", link: "#gioi-thieu" },
            { name: "Các khóa học", link: "#khoa-hoc" },
            { name: "Liên hệ", link: "#lien-he" }
        ],
    },
    {
        title: "Các khóa học",
        links: [
            { name: "Tiếng anh Tiểu học", link: "/tieu-hoc" },
            { name: "Tiếng anh THCS/THPT", link: "/thcs-thpt" },
            { name: "Luyện thi Cambridge", link: "/cambridge" },
            { name: "Luyện thi TOEIC/ IELTS", link: "/toeic-ielts" },
            { name: "Luyện thi lớp 10", link: "/lop10" },
            { name: "Luyện thi Đại học", link: "/daihoc" },
            { name: "Tiếng Anh giao tiếp", link: "/giao-tiep" },
        ],
    }
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link: "https://www.facebook.com/mspandaenglish" },
    { src: youtube, alt: "youtube logo", link: "https://www.facebook.com/mspandaenglish" },
    { src: instagram, alt: "instagram logo", link: "https://www.facebook.com/mspandaenglish" },
];

export const background = [
    {
        title: "Giảng viên khoa Ngoại Ngữ",
        subTitle: "Trường Cao Đẳng Bách Khoa Nam Sài Gòn"
    },
    {
        title: "Tốt nghiệp Thạc sĩ ngành Ngôn ngữ Anh",
        subTitle: "Trường Đại học Khoa học Xã hội và Nhân văn TPHCM"
    },
    {
        title: "Trình độ C2 - 9.0 IELTS",
        subTitle: "Khung tham chiếu Ngôn ngữ chung Châu Âu (CEFR)"
    },
    {
        title: "Đạt danh hiệu Nhà giáo Giáo dục nghề nghiệp dạy giỏi",
        subTitle: "Hội giảng Nhà giáo Giáo dục nghề nghiệp năm 2023"
    },

]

export const contact = [
    {
        title: "Hotline",
        subTitle: "0942.927.249",
        note: "Thứ 2 đến Chủ nhật từ 09:00 - 21:00"
    },
    {
        title: "Email",
        subTitle: "diemhang0912@gmail.com",
        note: "Thứ 2 đến Chủ nhật từ 09:00 - 21:00"
    },
    {
        title: "Địa chỉ",
        subTitle: "Chung cư 52 Hoàng Kim Giao, Quận 8, TPHCM",
        note: "Phụ huynh vui lòng gọi vào Hotline trước khi đến"
    }
]

export const Cambridge = {  
    category: "LUYỆN THI CHỨNG CHỈ",  
    name: "Tiếng Anh Cambridge",
    object: [
        {
            title: "Đối tượng học sinh",
            subTitle: "Các bạn từ 5-11 tuổi"
        },
        {
            title: "Hình thức học tập",
            subTitle: "Học Offline tại TPHCM"
        },
        {
            title: "Giáo trình sử dụng",
            subTitle: "Tài liệu từ Cambridge"
        }
    ],
    info: [
        {
            title: "Chương trình tiếng Anh thiếu nhi YLE Cambridge (Starters, Movers và Flyers) đánh giá kết quả các bài thi không thể hiện bằng điểm số mà thông qua các biểu tượng hình khiên (tiếng Anh là shield)."
        },
        {
            title: "Khiên được lấy biểu tượng từ các hiệp sĩ hoàng gia và sau này trở thành logo của Cambridge, giống như huy hiệu của sự chiến thắng. Số lượng khiên tối đa cho mỗi kỹ năng Nghe, Nói, Đọc & Viết là 5 khiên. Tổng số khiên bé có thể đạt được cho mỗi bài thi Starters, Movers và Flyers là 15 khiên."
        },
        {
            title: "Học sinh theo học chương trình này sẽ phát triển được năng lực ngôn ngữ thứ nhất bằng tiếng Anh dựa trên một chương trình học được thiết kế hướng đến thành công ở tất cả các nền văn hóa và thúc đẩy sự hiểu biết đa văn hóa."
        }
    ],
    path: [
        {
            title: "Pre-A1 Starters (5-7 tuổi)",
            subTitle: "Xây dựng nền tảng và kiến thức cơ bản, bước đầu làm quen với tiếng Anh chuẩn Cambridge. Chuẩn hóa phát âm. Củng cố từ vựng và ngữ pháp."
        },
        {
            title: "A1 Movers (8-10 tuổi)",
            subTitle: "Làm quen với 04 kỹ năng cơ bản của Cambridge (Nghe - Nói - Đọc - Viết).      Xây dựng vốn từ vựng theo từng topic của các dạng bài. Bổ trợ cho kỹ năng Nói và Viết"
        },
        {
            title: "A2 - Flyer (9-11 tuổi)",
            subTitle: "Ôn luyện các dạng đề thi tiêu chuẩn Cambridge. Củng cố kĩ năng làm bài thi linh hoạt. Tổ chức các kì thi thử đánh giá năng lực"
        }
    ],
    images: [
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Cambridge"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Cambridge"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Cambridge"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Cambridge"
        }
    ]
}

export const University = {  
    category: "LUYỆN THI",  
    name: "Luyện thi Đại học",
    object: [
        {
            title: "Đối tượng học sinh",
            subTitle: "Các bạn từ 5-11 tuổi"
        },
        {
            title: "Hình thức học tập",
            subTitle: "Học Offline tại TPHCM"
        },
        {
            title: "Giáo trình sử dụng",
            subTitle: "Tài liệu từ Cambridge"
        }
    ],
    info: [
        {
            title: "Chương trình tiếng Anh thiếu nhi YLE Cambridge (Starters, Movers và Flyers) đánh giá kết quả các bài thi không thể hiện bằng điểm số mà thông qua các biểu tượng hình khiên (tiếng Anh là shield)."
        },
        {
            title: "Khiên được lấy biểu tượng từ các hiệp sĩ hoàng gia và sau này trở thành logo của Cambridge, giống như huy hiệu của sự chiến thắng. Số lượng khiên tối đa cho mỗi kỹ năng Nghe, Nói, Đọc & Viết là 5 khiên. Tổng số khiên bé có thể đạt được cho mỗi bài thi Starters, Movers và Flyers là 15 khiên."
        },
        {
            title: "Học sinh theo học chương trình này sẽ phát triển được năng lực ngôn ngữ thứ nhất bằng tiếng Anh dựa trên một chương trình học được thiết kế hướng đến thành công ở tất cả các nền văn hóa và thúc đẩy sự hiểu biết đa văn hóa."
        }
    ],
    path: [
        {
            title: "Pre-A1 Starters (5-7 tuổi)",
            subTitle: "Xây dựng nền tảng và kiến thức cơ bản, bước đầu làm quen với tiếng Anh chuẩn Cambridge. Chuẩn hóa phát âm. Củng cố từ vựng và ngữ pháp."
        },
        {
            title: "A1 Movers (8-10 tuổi)",
            subTitle: "Làm quen với 04 kỹ năng cơ bản của Cambridge (Nghe - Nói - Đọc - Viết).      Xây dựng vốn từ vựng theo từng topic của các dạng bài. Bổ trợ cho kỹ năng Nói và Viết"
        },
        {
            title: "A2 - Flyer (9-11 tuổi)",
            subTitle: "Ôn luyện các dạng đề thi tiêu chuẩn Cambridge. Củng cố kĩ năng làm bài thi linh hoạt. Tổ chức các kì thi thử đánh giá năng lực"
        }
    ],
    images: [
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Luyện thi Đại học"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Luyện thi Đại học"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Luyện thi Đại học"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Luyện thi Đại học"
        }
    ]
}

export const Communication = {  
    category: "PHÁT TRIỂN KỸ NĂNG",  
    name: "Tiếng anh giao tiếp",
    object: [
        {
            title: "Đối tượng học sinh",
            subTitle: "Các bạn từ 5-11 tuổi"
        },
        {
            title: "Hình thức học tập",
            subTitle: "Học Offline tại TPHCM"
        },
        {
            title: "Giáo trình sử dụng",
            subTitle: "Tài liệu từ Cambridge"
        }
    ],
    info: [
        {
            title: "Chương trình tiếng Anh thiếu nhi YLE Cambridge (Starters, Movers và Flyers) đánh giá kết quả các bài thi không thể hiện bằng điểm số mà thông qua các biểu tượng hình khiên (tiếng Anh là shield)."
        },
        {
            title: "Khiên được lấy biểu tượng từ các hiệp sĩ hoàng gia và sau này trở thành logo của Cambridge, giống như huy hiệu của sự chiến thắng. Số lượng khiên tối đa cho mỗi kỹ năng Nghe, Nói, Đọc & Viết là 5 khiên. Tổng số khiên bé có thể đạt được cho mỗi bài thi Starters, Movers và Flyers là 15 khiên."
        },
        {
            title: "Học sinh theo học chương trình này sẽ phát triển được năng lực ngôn ngữ thứ nhất bằng tiếng Anh dựa trên một chương trình học được thiết kế hướng đến thành công ở tất cả các nền văn hóa và thúc đẩy sự hiểu biết đa văn hóa."
        }
    ],
    path: [
        {
            title: "Pre-A1 Starters (5-7 tuổi)",
            subTitle: "Xây dựng nền tảng và kiến thức cơ bản, bước đầu làm quen với tiếng Anh chuẩn Cambridge. Chuẩn hóa phát âm. Củng cố từ vựng và ngữ pháp."
        },
        {
            title: "A1 Movers (8-10 tuổi)",
            subTitle: "Làm quen với 04 kỹ năng cơ bản của Cambridge (Nghe - Nói - Đọc - Viết).      Xây dựng vốn từ vựng theo từng topic của các dạng bài. Bổ trợ cho kỹ năng Nói và Viết"
        },
        {
            title: "A2 - Flyer (9-11 tuổi)",
            subTitle: "Ôn luyện các dạng đề thi tiêu chuẩn Cambridge. Củng cố kĩ năng làm bài thi linh hoạt. Tổ chức các kì thi thử đánh giá năng lực"
        }
    ],
    images: [
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Tiếng anh giao tiếp"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Tiếng anh giao tiếp"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Tiếng anh giao tiếp"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Tiếng anh giao tiếp"
        }
    ]
}

export const Elementary = {  
    category: "TIẾNG ANH CÁC CẤP",  
    name: "Tiếng anh Tiểu học",
    object: [
        {
            title: "Đối tượng học sinh",
            subTitle: "Các bạn từ 5-11 tuổi"
        },
        {
            title: "Hình thức học tập",
            subTitle: "Học Offline tại TPHCM"
        },
        {
            title: "Giáo trình sử dụng",
            subTitle: "Tài liệu từ Cambridge"
        }
    ],
    info: [
        {
            title: "Chương trình tiếng Anh thiếu nhi YLE Cambridge (Starters, Movers và Flyers) đánh giá kết quả các bài thi không thể hiện bằng điểm số mà thông qua các biểu tượng hình khiên (tiếng Anh là shield)."
        },
        {
            title: "Khiên được lấy biểu tượng từ các hiệp sĩ hoàng gia và sau này trở thành logo của Cambridge, giống như huy hiệu của sự chiến thắng. Số lượng khiên tối đa cho mỗi kỹ năng Nghe, Nói, Đọc & Viết là 5 khiên. Tổng số khiên bé có thể đạt được cho mỗi bài thi Starters, Movers và Flyers là 15 khiên."
        },
        {
            title: "Học sinh theo học chương trình này sẽ phát triển được năng lực ngôn ngữ thứ nhất bằng tiếng Anh dựa trên một chương trình học được thiết kế hướng đến thành công ở tất cả các nền văn hóa và thúc đẩy sự hiểu biết đa văn hóa."
        }
    ],
    path: [
        {
            title: "Pre-A1 Starters (5-7 tuổi)",
            subTitle: "Xây dựng nền tảng và kiến thức cơ bản, bước đầu làm quen với tiếng Anh chuẩn Cambridge. Chuẩn hóa phát âm. Củng cố từ vựng và ngữ pháp."
        },
        {
            title: "A1 Movers (8-10 tuổi)",
            subTitle: "Làm quen với 04 kỹ năng cơ bản của Cambridge (Nghe - Nói - Đọc - Viết).      Xây dựng vốn từ vựng theo từng topic của các dạng bài. Bổ trợ cho kỹ năng Nói và Viết"
        },
        {
            title: "A2 - Flyer (9-11 tuổi)",
            subTitle: "Ôn luyện các dạng đề thi tiêu chuẩn Cambridge. Củng cố kĩ năng làm bài thi linh hoạt. Tổ chức các kì thi thử đánh giá năng lực"
        }
    ],
    images: [
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Tiếng anh tiểu học"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Tiếng anh tiểu học"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Tiếng anh tiểu học"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Tiếng anh tiểu học"
        }
    ]
}

export const GradeTen = {  
    category: "LUYỆN THI",  
    name: "Luyện thi Lớp 10",
    object: [
        {
            title: "Đối tượng học sinh",
            subTitle: "Các bạn từ 5-11 tuổi"
        },
        {
            title: "Hình thức học tập",
            subTitle: "Học Offline tại TPHCM"
        },
        {
            title: "Giáo trình sử dụng",
            subTitle: "Tài liệu từ Cambridge"
        }
    ],
    info: [
        {
            title: "Chương trình tiếng Anh thiếu nhi YLE Cambridge (Starters, Movers và Flyers) đánh giá kết quả các bài thi không thể hiện bằng điểm số mà thông qua các biểu tượng hình khiên (tiếng Anh là shield)."
        },
        {
            title: "Khiên được lấy biểu tượng từ các hiệp sĩ hoàng gia và sau này trở thành logo của Cambridge, giống như huy hiệu của sự chiến thắng. Số lượng khiên tối đa cho mỗi kỹ năng Nghe, Nói, Đọc & Viết là 5 khiên. Tổng số khiên bé có thể đạt được cho mỗi bài thi Starters, Movers và Flyers là 15 khiên."
        },
        {
            title: "Học sinh theo học chương trình này sẽ phát triển được năng lực ngôn ngữ thứ nhất bằng tiếng Anh dựa trên một chương trình học được thiết kế hướng đến thành công ở tất cả các nền văn hóa và thúc đẩy sự hiểu biết đa văn hóa."
        }
    ],
    path: [
        {
            title: "Pre-A1 Starters (5-7 tuổi)",
            subTitle: "Xây dựng nền tảng và kiến thức cơ bản, bước đầu làm quen với tiếng Anh chuẩn Cambridge. Chuẩn hóa phát âm. Củng cố từ vựng và ngữ pháp."
        },
        {
            title: "A1 Movers (8-10 tuổi)",
            subTitle: "Làm quen với 04 kỹ năng cơ bản của Cambridge (Nghe - Nói - Đọc - Viết).      Xây dựng vốn từ vựng theo từng topic của các dạng bài. Bổ trợ cho kỹ năng Nói và Viết"
        },
        {
            title: "A2 - Flyer (9-11 tuổi)",
            subTitle: "Ôn luyện các dạng đề thi tiêu chuẩn Cambridge. Củng cố kĩ năng làm bài thi linh hoạt. Tổ chức các kì thi thử đánh giá năng lực"
        }
    ],
    images: [
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Luyện thi Lớp 10"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Luyện thi Lớp 10"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Luyện thi Lớp 10"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Luyện thi Lớp 10"
        }
    ]
}

export const Highschool = {  
    category: "TIẾNG ANH CÁC CẤP",  
    name: "Tiếng anh THCS/THPT",
    object: [
        {
            title: "Đối tượng học sinh",
            subTitle: "Các bạn từ 5-11 tuổi"
        },
        {
            title: "Hình thức học tập",
            subTitle: "Học Offline tại TPHCM"
        },
        {
            title: "Giáo trình sử dụng",
            subTitle: "Tài liệu từ Cambridge"
        }
    ],
    info: [
        {
            title: "Chương trình tiếng Anh thiếu nhi YLE Cambridge (Starters, Movers và Flyers) đánh giá kết quả các bài thi không thể hiện bằng điểm số mà thông qua các biểu tượng hình khiên (tiếng Anh là shield)."
        },
        {
            title: "Khiên được lấy biểu tượng từ các hiệp sĩ hoàng gia và sau này trở thành logo của Cambridge, giống như huy hiệu của sự chiến thắng. Số lượng khiên tối đa cho mỗi kỹ năng Nghe, Nói, Đọc & Viết là 5 khiên. Tổng số khiên bé có thể đạt được cho mỗi bài thi Starters, Movers và Flyers là 15 khiên."
        },
        {
            title: "Học sinh theo học chương trình này sẽ phát triển được năng lực ngôn ngữ thứ nhất bằng tiếng Anh dựa trên một chương trình học được thiết kế hướng đến thành công ở tất cả các nền văn hóa và thúc đẩy sự hiểu biết đa văn hóa."
        }
    ],
    path: [
        {
            title: "Pre-A1 Starters (5-7 tuổi)",
            subTitle: "Xây dựng nền tảng và kiến thức cơ bản, bước đầu làm quen với tiếng Anh chuẩn Cambridge. Chuẩn hóa phát âm. Củng cố từ vựng và ngữ pháp."
        },
        {
            title: "A1 Movers (8-10 tuổi)",
            subTitle: "Làm quen với 04 kỹ năng cơ bản của Cambridge (Nghe - Nói - Đọc - Viết).      Xây dựng vốn từ vựng theo từng topic của các dạng bài. Bổ trợ cho kỹ năng Nói và Viết"
        },
        {
            title: "A2 - Flyer (9-11 tuổi)",
            subTitle: "Ôn luyện các dạng đề thi tiêu chuẩn Cambridge. Củng cố kĩ năng làm bài thi linh hoạt. Tổ chức các kì thi thử đánh giá năng lực"
        }
    ],
    images: [
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Tiếng anh THCS/THPT"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Tiếng anh THCS/THPT"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Tiếng anh THCS/THPT"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Tiếng anh THCS/THPT"
        }
    ]
}

export const ToeicIelts = {  
    category: "LUYỆN THI CHỨNG CHỈ",  
    name: "Luyện thi TOEIC/ IELTS",
    object: [
        {
            title: "Đối tượng học sinh",
            subTitle: "Các bạn từ 5-11 tuổi"
        },
        {
            title: "Hình thức học tập",
            subTitle: "Học Offline tại TPHCM"
        },
        {
            title: "Giáo trình sử dụng",
            subTitle: "Tài liệu từ Cambridge"
        }
    ],
    info: [
        {
            title: "Chương trình tiếng Anh thiếu nhi YLE Cambridge (Starters, Movers và Flyers) đánh giá kết quả các bài thi không thể hiện bằng điểm số mà thông qua các biểu tượng hình khiên (tiếng Anh là shield)."
        },
        {
            title: "Khiên được lấy biểu tượng từ các hiệp sĩ hoàng gia và sau này trở thành logo của Cambridge, giống như huy hiệu của sự chiến thắng. Số lượng khiên tối đa cho mỗi kỹ năng Nghe, Nói, Đọc & Viết là 5 khiên. Tổng số khiên bé có thể đạt được cho mỗi bài thi Starters, Movers và Flyers là 15 khiên."
        },
        {
            title: "Học sinh theo học chương trình này sẽ phát triển được năng lực ngôn ngữ thứ nhất bằng tiếng Anh dựa trên một chương trình học được thiết kế hướng đến thành công ở tất cả các nền văn hóa và thúc đẩy sự hiểu biết đa văn hóa."
        }
    ],
    path: [
        {
            title: "Pre-A1 Starters (5-7 tuổi)",
            subTitle: "Xây dựng nền tảng và kiến thức cơ bản, bước đầu làm quen với tiếng Anh chuẩn Cambridge. Chuẩn hóa phát âm. Củng cố từ vựng và ngữ pháp."
        },
        {
            title: "A1 Movers (8-10 tuổi)",
            subTitle: "Làm quen với 04 kỹ năng cơ bản của Cambridge (Nghe - Nói - Đọc - Viết).      Xây dựng vốn từ vựng theo từng topic của các dạng bài. Bổ trợ cho kỹ năng Nói và Viết"
        },
        {
            title: "A2 - Flyer (9-11 tuổi)",
            subTitle: "Ôn luyện các dạng đề thi tiêu chuẩn Cambridge. Củng cố kĩ năng làm bài thi linh hoạt. Tổ chức các kì thi thử đánh giá năng lực"
        }
    ],
    images: [
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Luyện thi TOEIC/ IELTS"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Luyện thi TOEIC/ IELTS"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Luyện thi TOEIC/ IELTS"
        },
        {
            imgURL: classImage,
            alt: "Hình ảnh lớp Luyện thi TOEIC/ IELTS"
        }
    ]
}