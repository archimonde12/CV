const CONTACT = [
  { content: "", contentVN: "", icon: "" },
  { content: "", contentVN: "", icon: "" },
  { content: "", contentVN: "", icon: "" },
];

const SKILLS = [
  { name: "HTML", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },
  { name: "JS", icon: "fab fa-js" },
  { name: "React", icon: "fab fa-react" },
  { name: "React<br>Native", icon: "fab fa-react" },
];

const HOBBIES = [
  {
    name: "Reading",
    nameVN: "Đọc sách",
    icon: "fas fa-book",
    detail: "Love to read Self help, Economics and Science book",
    detailVN:
      "Yêu thích dòng sách phát triển bản thân, đầu tư và gần đây là sách về công nghệ",
  },
  {
    name: "Music",
    nameVN: "Âm nhạc",
    icon: "fas fa-music",
    detail:
      "Singing and accompaniment on the guitar are many of Vietnamese young songs",
    detailVN: "Hát và đệm đàn guitar được nhiều bài nhạc trẻ hiện nay.",
  },
  {
    name: "Swimming",
    nameVN: "Bơi lội",
    icon: "fas fa-swimmer",
    detail:
      "My favorite sport, I practice every day now for almost <strong>200 days</strong> in a row. The longest continuous swimming achievement is <strong>2000 meters</strong>",
    detailVN:
      "Môn thể thao yêu thích nhất, tôi tập luyện mỗi ngày hiện tại đã được gần <strong>200 ngày</strong> liên tiếp. Thành tích bơi liên tục dài nhất là <strong>2000 mét</strong>",
  },
  {
    name: "Computer",
    nameVN: "Máy tính",
    icon: "fas fa-desktop",
    detail:
      "loves working with computers, being able to work more than <strong>12 hours</strong> a day if needed",
    detailVN:
      "Có thể làm việc liên tục <strong>12 tiếng </strong> trên máy vi tính nếu cần thiết",
  },
];

const EXPERIENCE = [
  {
    date: "10/2020",
    dateVN: "10/2020",
    title: "Attend Grand Hackathon contest",
    titleVN: "Tham dự Grand Hackathon",
    company: "MindX",
    companyVN: "MindX",
    content: `Program a product in 36 hours according to the topic required by the organizers. <br> Technology used: HTML, CSS, JS, Firebase <br> Product link at <a href = "https: // archimonde12 .github.io / mindXGrandHackathon / src / html / main / index.html "> here </a>`,
    contentVN: `Lập trình một sản phẩm trong 36 tiếng theo đề bài ban tổ chức yêu cầu.<br>Công nghệ đã sử dụng: HTML, CSS, JS, Firebase <br> Link sản phẩm tại  <a href="https://archimonde12.github.io/mindXGrandHackathon/src/html/main/index.html">đây</a>`,
  },
  {
    date: "08/2020",
    title: "My Portfolio",
    company: "Amazon",
    content: `
      Products used to store finished products. <br> Technology used: HTML, CSS, JS <br> Product link at <a href = "https://archimonde12.github.io/My -Porfolios / "> here </a>`,
    dateVN: "08/2020",
    titleVN: "My Porfolio",
    companyVN: "My self",
    contentVN: `Sản phẩm dùng để lưu trữ những sản phẩm đã hoàn thiện.<br>Công nghệ đã sử dụng: HTML, CSS, JS <br> Link sản phẩm tại  <a href="https://archimonde12.github.io/My-Porfolios/">đây</a>`,
  },
  {
    date: "05/2020",
    title: "Final project of basic web programming",
    company: " MindX",
    content: `Gift Shop - supports choosing gifts <br> Technology of use: HTML, CSS, JS. <br> Link products at <a href="https://archimonde12.github.io/suggestGiftWebsite/index.html"> here </a>`,
    dateVN: "6/2020",
    titleVN: "Dự án cuối khóa lập trình web cơ bản",
    companyVN: "MindX",
    contentVN: `Gift Shop – hỗ trợ chọn quà tặng.<br>Công nghệ sử dụng: HTML, CSS, JS. <br> Link sản phẩm tại  <a href="https://archimonde12.github.io/suggestGiftWebsite/index.html">đây</a>`,
  },
];

//RENDER FUNCTION

const renderSkill = () => {
  let skillHTML = "";
  SKILLS.map((value) => {
    skillHTML += `  
    <li>
        <div class="li_wrap">
            <div class="icon">
                <i class="${value.icon}"></i>
            </div>
            <div class="text">${value.name}</div>
        </div>
    </li>`;
  });
  return skillHTML;
};

const renderHobbies = (isEnglishMode) => {
  let hobbiesHTML = "";
  HOBBIES.map((item) => {
    let icon, name, detail;
    if (isEnglishMode) {
      icon = item.icon;
      name = item.name;
      detail = item.detail;
    } else {
      icon = item.icon;
      name = item.nameVN;
      detail = item.detailVN;
    }
    hobbiesHTML += `  
    <li>
        <div class="li_wrap popup" onclick="popupShow('${name}-popup')">
            <div class="icon">
                <i class="${icon}"></i>
            </div>
            <div class="text">${name}</div>
            <span class="popuptext" id="${name}-popup">${detail}</span>
        </div>
    </li> `;
  });

  return hobbiesHTML;
};

const renderExperience = (isEnglishMode) => {
  let experienceHTML = "";
  EXPERIENCE.map((item) => {
    let date, title, company, content;
    if (isEnglishMode) {
      date = item.date;
      title = item.title;
      company = item.company;
      content = item.content;
    } else {
      date = item.dateVN;
      title = item.titleVN;
      company = item.companyVN;
      content = item.contentVN;
    }
    experienceHTML += ` <li>
        <div class="li_wrap">
            <div class="date">${date}</div>
            <div class="info">
                <p class="info_title">${title}</p>
                <p class="info_com">${company}</p>
                <p class="info_content">
                   ${content}
                </p>
            </div>
        </div>
    </li>`;
  });
  return experienceHTML;
};

const eng_mode = `
<!-- leftside -->
<div class="leftside">
    <!-- avatar -->
    <section class="avatar">
        <img src="images/Crop-1-1.jpg">
    </section>
    <!-- contant -->
    <section class="contact paddingbottom">
        <div class="title">Contact</div>
        <ul>
            <li>
                <div class="li_wrap">
                    <div class="icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="text">0356100460</div>
                </div>
            </li>
            <li>
                <div class="li_wrap">
                    <div class="icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="text">hoanbkhn@gmail.com</div>
                </div>
            </li>
            <li>
                <div class="li_wrap">
                    <div class="icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="text">Tam Hiep - Thanh Tri - Ha Noi</div>
                </div>
            </li>
        </ul>
    </section>
    <!-- skills -->
    <section class="skills paddingbottom">
        <div class="title">skills</div>
        <ul>
          ${renderSkill()}
        </ul>
    </section>
    <!-- hobbies -->
    <section class="hobbies paddingbottom">
        <div class="title">hobbies</div>
        <ul>
          ${renderHobbies(true)}
        </ul>
    </section>
</div>
<!-- end .leftside -->
<!-- rightside -->
<div class="rightside">
    <!-- header -->
    <div class="header">
        <div class="name_role">
            <div class="name">
                LUU DINH HOAN
            </div>
            <div class="role">
                Web and Mobile Developer
            </div>
        </div>
        <div class="about">
            With a passion for technology and love to work with technology equipment. 
            I gave up my old industry, Food Technology, to IT. Currently, 
            I have 7 months learning and practicing Web programming using HTML, JS and CSS. 
            Currently studying to be a mobile programmer for 2 months.
        </div>
        <div class="language_btn_wrap">
            <div class="controller"></div>
            <span class="eng">EN</span>
            <span class="vie">VN</span>
        </div>
    </div>
    <div class="right_inner">
        <!-- exp -->
        <div class="exp">
            <div class="title">
                Experience
            </div>
        </div>
        <!-- exp_wrap -->
        <div class="exp_wrap">
            <ul>
               ${renderExperience(true)}
            </ul>
        </div>
        <!-- education -->
        <div class="education">
            <div class="title">
                Education
            </div>
        </div>
        <!-- education_wrap -->
        <div class="education_wrap">
            <ul>
                <li>
                    <div class="li_wrap">
                        <div class="date">2010-2014</div>
                        <div class="info">
                            <p class="info_title">FULLSTACK MOBILE PROGRAMS COURSE</p>
                            <p class="info_uni">MindX Academy</p>
                            <p class="info_content">
                            - 6 months of learning and practicing making website, web-app using HTML, CSS, JS - Currently studying Moblie programming with React Native
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</div>
<!-- end .rightside -->
`;
const vie_mode = `
<!-- leftside -->
<div class="leftside">
    <!-- avatar -->
    <section class="avatar">
        <img src="images/Crop-1-1.jpg">
    </section>
    <!-- contant -->
    <section class="contact paddingbottom">
        <div class="title">Liên Hệ</div>
        <ul>
            <li>
                <div class="li_wrap">
                    <div class="icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="text">0356100460</div>
                </div>
            </li>
            <li>
                <div class="li_wrap">
                    <div class="icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="text">hoanbkhn@gmail.com</div>
                </div>
            </li>
            <li>
                <div class="li_wrap">
                    <div class="icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="text">Tam Hiệp - Thanh Trì - Hà Nội</div>
                </div>
            </li>
        </ul>
    </section>
    <!-- skills -->
    <section class="skills paddingbottom">
        <div class="title">Kỹ Năng</div>
        <ul>
            ${renderSkill()}
        </ul>
    </section>
    <!-- hobbies -->
    <section class="hobbies paddingbottom">
        <div class="title">Sở Thích</div>
        <ul>
         ${renderHobbies(false)}
        </ul>
    </section>
</div>
<!-- end .leftside -->
<!-- rightside -->
<div class="rightside">
    <!-- header -->
    <div class="header">
        <div class="name_role">
            <div class="name">
                LƯU ĐÌNH HOÀN
            </div>
            <div class="role">
                Lập Trình Viên
            </div>
        </div>
        <div class="about">
        Với niềm đam mê công nghệ và thích làm việc với các thiết bị công nghệ. Tôi đã từ bỏ ngành cũ của mình là Công Nghệ Thực Phẩm để chuyển sang ngành Công Nghệ Thông Tin. Hiện tại tôi đã có 7 tháng học tập và thực hành lập trình Web bằng HTML, JS và CSS. Hiện tại đang theo học để trở thành một lập trình viên di động được 2 tháng. 
        </div>
        <div class="language_btn_wrap">
            <div class="controller vie_mode"></div>
            <span class="eng">EN</span>
            <span class="vie">VN</span>
        </div>
    </div>
    <div class="right_inner">
        <!-- exp -->
        <div class="exp">
            <div class="title">
                Kinh Nghiệm
            </div>
        </div>
        <!-- exp_wrap -->
        <div class="exp_wrap">
            <ul>
                ${renderExperience(false)}
            </ul>
        </div>
        <!-- education -->
        <div class="education">
            <div class="title">
                HỌC TẬP
            </div>
        </div>
        <!-- education_wrap -->
        <div class="education_wrap">
            <ul>
                <li>
                    <div class="li_wrap">
                        <div class="date">2/2020 - Nay</div>
                        <div class="info">
                            <p class="info_title">Khóa học Lập Trình Mobile Fullstack</p>
                            <p class="info_uni">Học viện MindX</p>
                            <p class="info_content">
                               - 6 tháng học tập và thực hành làm website, web-app bằng HTML,CSS,JS
                               - Hiện tại đang theo học lập trình Moblie bằng React Native
                            </p>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</div>
<!-- end .rightside -->
</div>

`;

const CV = document.querySelector(".CV");
// let laguageBtn = document.querySelector("language_btn_wrap")
// let controller = document.querySelector("controller")

// laguageBtn.onclick = function () {
//     if (controller.classList.contains("vie_monde")) {
//         CV.innerHTML = eng_mode;
//     } else {
//         CV.innerHTML = vie_mode;
//     }
// }

function changeToEng() {
  CV.innerHTML = eng_mode;
  let laguageBtn = document.querySelector(".language_btn_wrap");
  let controller = document.querySelector(".controller");
  laguageBtn.onclick = function () {
    changeToVie();
  };
}

function changeToVie() {
  CV.innerHTML = vie_mode;
  let laguageBtn = document.querySelector(".language_btn_wrap");
  let controller = document.querySelector(".controller");
  laguageBtn.onclick = function () {
    changeToEng();
  };
}

function popupShow(popupID) {
  console.log(popupID);
  var popup = document.getElementById(popupID);
  popup.classList.toggle("show");
}

changeToEng();
