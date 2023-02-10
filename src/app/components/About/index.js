import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Thumbnail from "../Thumbnail";
import Content from "../Content";

const About = ({ content, imgUrl, disable }) => {
  var about_context =
    "<b>İstanbul</b> bin altı yüz yıl boyunca, 330'dan 1922'ye kadar bulunan dönemde; 4 farklı imparatorluğa başkentlik yapmış , şiirlere konu olmuş bir şehir.<br> Pek çok kültüre ev sahipliği yapan , tarihi , sanatı , geçmişi kalbinde taşıyan bu şehir aynı zamanda dünyanın en büyük metropollerinden biri. <br> Miel Proje Pazarlama ,bu eşsiz şehrin kalbinde , gerçek İstanbul’u yaşayabileceğiniz lokasyonlarda sizleri doğru yatırımlarla buluşturuyor. <br> Sürekli yenilenen  sektörümüzdeki inovatif çözümleri tecrübesi ile bir araya getirerek , bağımsız çözümlerle müşterilerinin ve işbirlikçileri ile güçlü ve güvenilir bir partner olmayı amaç edinen Miel Proje Pazarlama , müşteri memnuniyetini arttırmak, ekonomik çözümler sunmak, alıcısını doğru yatırım ile gerçek fiyatlarda buluşturmak misyonu ile yola çıkıyor.";

  return (
    <div className=" sm-top">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-md-6 col-lg-5">
            <Thumbnail classes="about-thumb" imgSrc={imgUrl} />
          </div>

          <div className="col-md-6 col-lg-7">
            <Content classes="about-content">
              <h6>{"about"}</h6>
              <p>{parse(about_context)}</p>
              {disable ? (
                <Link
                  to={`${process.env.PUBLIC_URL + "/about"}`}
                  className="btn-about"
                >
                  {"More Details"} <i className="fa fa-angle-double-right" />
                </Link>
              ) : null}
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
