import { Col, Row } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../App";
const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Row
        style={{
          backgroundColor: "#f5f5f7",
          textAlign: "center",
          padding: "3%",
        }}
      >
        <Col>
        <img style={{width: "10%" ,margin: "auto", marginTop: 100}} src="https://cdn.pixabay.com/photo/2016/04/17/01/41/globe-1334084_960_720.png"></img>
          <h1>שלום {user.name},</h1>
          {user.username === "אורח" ? <p>למה שלא תתחבר?</p>: <p>שכור רכב בבקשה</p>}
        </Col>
      </Row>
        <Row style={{ textAlign: "center", paddingTop: "3%", paddingLeft: "10%", paddingRight: "10%"}}>
          <Col>
            <h3>הנה אוטו</h3>
            <p1>קנה אותו</p1>
          </Col>
          <img
            src="https://starpng.com/public/uploads/preview/orange-car-png-car-png-transparent-101576921091osjxvr0ad4.png"
            alt="First Image"
            className="homeImg"
          />
        </Row>
      <Row style={{ textAlign: "center", padding: "8%" }}>
        <Col>
          <h4>צרו קשר</h4>
          <p>*0324</p>
        </Col>
        <Col>
          <h4>קצת עלינו</h4>
          <p>אנחנו גלובוס</p>
        </Col>
        <Col>
          <h4>וזהו</h4>
          <p>תנו לנו כסף</p>
        </Col>
      </Row>
      <Row >
        <Col>
          <img
            src="https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg"
            alt="Second Image"
            className="homeImg"
          />
        </Col>
        <Col>
          <img
            src="http://blog.countyford.com/wp-content/uploads/2016/05/2016-ford-f-150-county-ford-945x629.jpg"
            alt="Third Image"
            className="homeImg"
          />
        </Col>
      </Row>
      <Row style={{ textAlign: "center", padding: "3%", backgroundColor: "#ececee", marginTop: 20}}>
        <Col>
          <h6>מידע נוסף מאתר סמסונג:</h6>
          <p>התמונה להמחשה בלבד. זמינות הצבעים עשויה להשתנות בהתאם למדינה או לספק הרשת.

*התמונה של Galaxy Z Fold3 5G‏, Galaxy Z Flip3 5G ו-S Pen ממהדורת Fold נועדה להמחשה בלבד.

*ה-S Pen ממהדורת Fold נמכר בנפרד ותואם רק ל-Galaxy Z Fold3 5G.

*התמונה של שני טלפונים מסוג Galaxy Z Fold3 5G‏ ו-S Pen ממהדורת Fold נועדה להמחשה בלבד.

*תכל התמונות המופיעות בדף זה הם תמונת הדמיה למטרות המחשה.
*התמונה בראש העמוד של Galaxy Note20 ו-Note20 Ultra המוצגים בזווית נועדה להמחשה בלבד.

*התמונה בראש העמוד של Galaxy Z Fold2 5G פתוח ומוצג מלפנים עם טפט הפרפרים הגרפי על המסך נועדה להמחשה בלבד.

*התמונה של אחד עשר הטלפונים מסוג Galaxy S20 FE העומדים ניצבים במעגל מדומה לצורך המחשה.  

*התמונה להמחשה בלבד. זמינות הצבעים עשויה להשתנות בהתאם למדינה או לספק הרשת. Galaxy A52 מדורג בתור IP67. הדירוג מבוסס על תנאי בדיקת הטבעה בעומק של עד מטר אחד במים מתוקים למשך 30 דקות לכל היותר. לא מומלץ לשימוש בחוף הים או בבריכה. במקרה שנשפכים על הטלפון נוזלים המכילים סוכר, יש לשטוף את המכשיר במים עומדים נקיים תוך לחיצה על המקשים. בטוח לשימוש בלחץ מים נמוך בלבד. לחץ מים גבוה כגון מי ברז זורמים או מקלחת עלול לגרום נזק למכשיר.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
