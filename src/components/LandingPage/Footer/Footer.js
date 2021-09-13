import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footer--aboutUs">
          <h1 className="headerPlsSmall">Về chúng tôi</h1>
          <p className="footer--content text--align">
            The Okyo là một thương hiệu thành lập ra với sứ mệnh dành riêng cho
            các bạn trẻ hiện nay. Chúng mình chuyên sáng tạo các nội dung, thiết
            kế và ấn phẩm,… đặc biệt là phát hành các thiết kế áo thun, sơ mi,
            hoodie, sweater,... và các sản phẩm thiết kế đồ hoạ khác do nhà phân
            phối áo chính hang do Tokago sản xuất!
          </p>
        </div>
        <div className="footer--contact">
          <h1 className="headerPlsSmall">Thông tin liên hệ</h1>

          <p className="footer--content">
            <p className="white">
              <strong>SĐT:</strong>{" "}
            </p>
            <p> (+84) 037 6971168</p>
          </p>

          <p className="footer--content">
            <p className="white">
              <strong>Email:</strong>
            </p>
            <p>theokyo.store@gmail.com</p>
          </p>
          <p className="footer--content">
            <p className="white">
              <strong>Link mua áo:</strong>
            </p>
            <a
              class="linkmuaao"
              href="https://order.tokago.vn/chien-dich?theokyostore="
              target="_blank"
              rel="noreferrer"
            >
              Link mua áo của chúng tớ nè!
            </a>
          </p>
        </div>

        <div className="footer--Fanpage">
          <h1 className="headerPlsSmall">Fanpage</h1>
          <img
            id="imagefanpage"
            src="https://i.im.ge/2021/09/13/T7tBMX.jpg"
            alt="fanpage"
          />
        </div>
      </div>
      <div className="footer--bottom align--bottom">
        <p>Copyright ©&nbsp;</p>
        <p className="white"> The Okyo</p>
        <p>.&nbsp;Powered by&nbsp;</p>
        <p className="white">The Okyo</p>
        <p className="darkgrey">.</p>
      </div>
    </div>
  );
};

export default Footer;
