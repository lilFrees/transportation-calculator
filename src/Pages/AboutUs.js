<<<<<<< HEAD
import style from "./Pages.module.css";
import Survey from "../components/UI/Survey/Survey";
import AlignCenter from "../components/UI/AlignCenter/AlignCenter";
import truck from "../icons/truck.jpg";
import happy from "../icons/happy.jpeg";
import whiteTruck from "../icons/white-truck.jpg";
import { Helmet } from "react-helmet";

function AboutUs() {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Prime Auto Transport: Your trusted nationwide car shipping company. We specialize in safe and reliable vehicle transportation across the USA. Discover why we're the top choice for efficient car shipping services on our About Us page."
        />
        <meta
          name="keywords"
          content="Car shipping companies,
            Auto transport services,
            Vehicle shipping quotes,
            Nationwide car transporters,
            Reliable car shipping,
            Affordable auto transport,
            Cross-country vehicle shipping,
            Safe car transport,
            Expert car shipping,
            Prime Auto Transport reviews,
            Best car shipping company,
            Nationwide vehicle transport,
            Reliable auto transporters,
            Affordable car shipping,
            Cross-country car transport,
            Safe vehicle shipping,
            Prime Auto Transport testimonials,
            Top car shipping services,
            Nationwide auto transport,
            Reliable vehicle shipping
            "
        />
        <meta property="og:title" content="About Us | Prime Transport" />
        <meta
          property="og:description"
          content="Get instant quotes for car shipping services across the USA. Reliable and affordable vehicle transport services. Contact us now for a free quote."
        />

        <title>About Us | Prime Transport</title>
      </Helmet>
      <Survey />

      <article className={style.section}>
        <AlignCenter className={style.content}>
          <h1 className={style.heading}>About Prime Auto Transport</h1>
          <div className={style.boxes}>
            <div className={style.box}>
              <h2 className={style["sub-heading"]}>
                Reliable Car Shipping Services Across the USA
              </h2>

              <p className={style.paragraph}>
                At Prime Auto Transport, we take pride in providing top-notch
                transportation services for shipping cars across the United
                States. With years of experience in the industry, we have
                established ourselves as a trusted and reliable partner for
                individuals and businesses alike. Our commitment to excellence,
                customer satisfaction, and safe delivery sets us apart from the
                competition.
              </p>
            </div>
            <div className={style["image-box"]}>
              <img
                src={truck}
                className={style.image}
                alt="Truck transporting cars"
              />
            </div>
          </div>

          <h2 className={style["sub-heading"]}>Our Mission</h2>

          <p className={style.paragraph}>
            Our mission is to simplify the process of shipping cars across the
            USA while ensuring the highest level of customer satisfaction. We
            understand that your vehicle is not just a means of transportation
            but also a valuable asset. That's why we strive to deliver your
            vehicle safely, securely, and on time to its destination, no matter
            the distance.
          </p>

          <div className={style.boxes}>
            <div className={style.box}>
              <h2 className={style["sub-heading"]}>Our Services</h2>

              <p className={style.paragraph}>
                Prime Auto Transport offers a comprehensive range of car
                shipping services tailored to meet your specific needs. Whether
                you need to transport a single vehicle or multiple cars, we have
                the expertise and resources to handle it efficiently. Our
                services include: Open Car Transport: Our open car carriers are
                designed to transport multiple vehicles at once, making it a
                cost-effective option for shipping cars across the USA. Enclosed
                Car Transport: For added protection and security, we offer
                enclosed car transport services. This option is ideal for
                classic cars, luxury vehicles, or any vehicle that requires
                extra care during transportation. Door-to-Door Delivery: We
                understand the importance of convenience, which is why we offer
                door-to-door delivery services. Our professional drivers will
                pick up your vehicle from your location and deliver it directly
                to the destination of your choice. Expedited Shipping: If you
                need your vehicle to be transported urgently, we offer expedited
                shipping services to ensure a faster delivery time.
              </p>
            </div>
            <div className={style["image-box"]}>
              <img src={whiteTruck} className={style.image} alt="White Truck" />
            </div>
          </div>

          <h2 className={style["sub-heading"]}>Why Choose Us</h2>
          <div className={style.boxes}>
            <div className={style["image-box"]}>
              <img
                src={happy}
                className={style.image}
                alt="Satisfied customer receiving their delivered vehicle"
              />
            </div>
            <div className={style.box}>
              <p className={style.paragraph}>
                There are several reasons why you should choose Prime Auto
                Transport for your car shipping needs:
                <ol>
                  <li>
                    Experience and Expertise: With years of experience in the
                    industry, we have the knowledge and expertise to handle all
                    types of car shipments efficiently.
                  </li>
                  <li>
                    Reliable and Trustworthy: We take pride in our reputation
                    for being reliable and trustworthy. Our team of
                    professionals is dedicated to providing exceptional service
                    and ensuring the safe delivery of your vehicle.
                  </li>
                  <li>
                    Competitive Pricing: We offer competitive pricing without
                    compromising on the quality of our services. We believe in
                    providing value for money to our customers.
                  </li>
                  <li>
                    Excellent Customer Service: Our customer service team is
                    available to assist you throughout the entire shipping
                    process. We are committed to addressing any concerns or
                    queries promptly and ensuring your satisfaction.
                  </li>
                </ol>
              </p>
            </div>
          </div>

          <p className={style.paragraph}>
            At Prime Auto Transport, we value our customers and strive to exceed
            their expectations. We understand that shipping a car can be a
            significant decision, and we are here to make the process as smooth
            and hassle-free as possible. Trust us with your car shipping needs,
            and we will ensure a seamless experience from start to finish.
            Contact us today to get a quote or learn more about our services. We
            look forward to serving you and being your trusted partner for all
            your car shipping needs.
          </p>
        </AlignCenter>
      </article>
    </div>
  );
}

export default AboutUs;
=======
import style from "./Pages.module.css";
import Survey from "../components/UI/Survey/Survey";
import AlignCenter from "../components/UI/AlignCenter/AlignCenter";
import truck from "../icons/truck.jpg";
import happy from "../icons/happy.jpeg";
import whiteTruck from "../icons/white-truck.jpg";
import { Helmet } from "react-helmet";

function AboutUs() {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Prime Auto Transport: Your trusted nationwide car shipping company. We specialize in safe and reliable vehicle transportation across the USA. Discover why we're the top choice for efficient car shipping services on our About Us page."
        />
        <meta
          name="keywords"
          content="Car shipping companies,
            Auto transport services,
            Vehicle shipping quotes,
            Nationwide car transporters,
            Reliable car shipping,
            Affordable auto transport,
            Cross-country vehicle shipping,
            Safe car transport,
            Expert car shipping,
            Prime Auto Transport reviews,
            Best car shipping company,
            Nationwide vehicle transport,
            Reliable auto transporters,
            Affordable car shipping,
            Cross-country car transport,
            Safe vehicle shipping,
            Prime Auto Transport testimonials,
            Top car shipping services,
            Nationwide auto transport,
            Reliable vehicle shipping
            "
        />
        <meta property="og:title" content="About Us | Prime Transport" />
        <meta
          property="og:description"
          content="Get instant quotes for car shipping services across the USA. Reliable and affordable vehicle transport services. Contact us now for a free quote."
        />

        <title>About Us | Prime Transport</title>
      </Helmet>
      <Survey />

      <article className={style.section}>
        <AlignCenter className={style.content}>
          <h1 className={style.heading}>About Prime Auto Transport</h1>
          <div className={style.boxes}>
            <div className={style.box}>
              <h2 className={style["sub-heading"]}>
                Reliable Car Shipping Services Across the USA
              </h2>

              <p className={style.paragraph}>
                At Prime Auto Transport, we take pride in providing top-notch
                transportation services for shipping cars across the United
                States. With years of experience in the industry, we have
                established ourselves as a trusted and reliable partner for
                individuals and businesses alike. Our commitment to excellence,
                customer satisfaction, and safe delivery sets us apart from the
                competition.
              </p>
            </div>
            <div className={style["image-box"]}>
              <img
                src={truck}
                className={style.image}
                alt="Truck transporting cars"
              />
            </div>
          </div>

          <h2 className={style["sub-heading"]}>Our Mission</h2>

          <p className={style.paragraph}>
            Our mission is to simplify the process of shipping cars across the
            USA while ensuring the highest level of customer satisfaction. We
            understand that your vehicle is not just a means of transportation
            but also a valuable asset. That's why we strive to deliver your
            vehicle safely, securely, and on time to its destination, no matter
            the distance.
          </p>

          <div className={style.boxes}>
            <div className={style.box}>
              <h2 className={style["sub-heading"]}>Our Services</h2>

              <p className={style.paragraph}>
                Prime Auto Transport offers a comprehensive range of car
                shipping services tailored to meet your specific needs. Whether
                you need to transport a single vehicle or multiple cars, we have
                the expertise and resources to handle it efficiently. Our
                services include: Open Car Transport: Our open car carriers are
                designed to transport multiple vehicles at once, making it a
                cost-effective option for shipping cars across the USA. Enclosed
                Car Transport: For added protection and security, we offer
                enclosed car transport services. This option is ideal for
                classic cars, luxury vehicles, or any vehicle that requires
                extra care during transportation. Door-to-Door Delivery: We
                understand the importance of convenience, which is why we offer
                door-to-door delivery services. Our professional drivers will
                pick up your vehicle from your location and deliver it directly
                to the destination of your choice. Expedited Shipping: If you
                need your vehicle to be transported urgently, we offer expedited
                shipping services to ensure a faster delivery time.
              </p>
            </div>
            <div className={style["image-box"]}>
              <img src={whiteTruck} className={style.image} alt="White Truck" />
            </div>
          </div>

          <h2 className={style["sub-heading"]}>Why Choose Us</h2>
          <div className={style.boxes}>
            <div className={style["image-box"]}>
              <img
                src={happy}
                className={style.image}
                alt="Satisfied customer receiving their delivered vehicle"
              />
            </div>
            <div className={style.box}>
              <p className={style.paragraph}>
                There are several reasons why you should choose Prime Auto
                Transport for your car shipping needs:
                <ol>
                  <li>
                    Experience and Expertise: With years of experience in the
                    industry, we have the knowledge and expertise to handle all
                    types of car shipments efficiently.
                  </li>
                  <li>
                    Reliable and Trustworthy: We take pride in our reputation
                    for being reliable and trustworthy. Our team of
                    professionals is dedicated to providing exceptional service
                    and ensuring the safe delivery of your vehicle.
                  </li>
                  <li>
                    Competitive Pricing: We offer competitive pricing without
                    compromising on the quality of our services. We believe in
                    providing value for money to our customers.
                  </li>
                  <li>
                    Excellent Customer Service: Our customer service team is
                    available to assist you throughout the entire shipping
                    process. We are committed to addressing any concerns or
                    queries promptly and ensuring your satisfaction.
                  </li>
                </ol>
              </p>
            </div>
          </div>

          <p className={style.paragraph}>
            At Prime Auto Transport, we value our customers and strive to exceed
            their expectations. We understand that shipping a car can be a
            significant decision, and we are here to make the process as smooth
            and hassle-free as possible. Trust us with your car shipping needs,
            and we will ensure a seamless experience from start to finish.
            Contact us today to get a quote or learn more about our services. We
            look forward to serving you and being your trusted partner for all
            your car shipping needs.
          </p>
        </AlignCenter>
      </article>
    </div>
  );
}

export default AboutUs;
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
