import React from 'react'

import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {

  const tableOfContents = [
    "What information do we collect?",
    "How do we use your information",
    "Will your information be shared with anyone?",
    "Do we use cookies and other tracking technologies?",
    "How long do we keep your information?",
    "How do we keep your information safe?",
    "Do we collect information from minors?",
    "What are your privacy rights?",
    "Controls for do-not-track features",
    "Do California residents have specific privacy rights?",
    "Do we make updates to this notice?",
    "How can you contact us about this notice?",
  ]
  return (
    <>
      <header className='pt-5 mb-4'>
        <Container className='mt-5 pt-3'>
          <h1 className='text-center text-uppercase fw-semibold fs-1 mb-5'>Privacy policy</h1>
          <small className='steel-pink-text fs-3 fw-semibold mb-3 d-block'>Last updated Jan 01, 2024</small>
          <p className=''>Thank you for choosing to be part of our community at Neutronpay Inc. (“Company“, “we“, “us“, “our“). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at info@neutronpay.com.When you visit our website https://neutronpay.com (the “Website“), use our mobile application, as the case may be (the “App“) and more generally, use any of our services (the “Services“, which include the Website and App), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.This privacy notice applies to all information collected through our Services (which, as described above, includes our Website and App), as well as, any related services, sales, marketing or events.</p>
          <b className='fs-5'>Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</b>
        </Container>
      </header>
      <section className='mb-4'>
        <Container>
          <h2 className='text-uppercase steel-pink-text fw-semibold'>Table of contents</h2>
          <ol className='text-uppercase fs-4 fw-medium'>
            {tableOfContents.map((section, index) => <li key={index} className='ps-2'><Link className='text-black'to={`#section-${index + 1}`}>{section}</Link></li>)}

          </ol>
        </Container>
      </section>
      <section id='section-1' className='mb-4'>
        <Container>
          <h2 className='text-uppercase fs-3 fw-semibold steel-pink-text mb-4'>{"1. " + tableOfContents[0]}</h2>
          <h3 className='fw-semibold mb-3'>Personal information you disclose to us</h3>
          <div className='fs-5'>
            <p><b className='text-capitalize'>In short:</b> We collect personal information that you provide to us.</p>
            <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services or otherwise when you contact us.</p>
            <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
            <p><b>Personal Information Provided by You: </b>We collect names; phone numbers; email addresses; mailing addresses; billing addresses; contact preferences; and other similar information.</p>
            <p><b>Payment Data: </b>We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Onramper. You may find their privacy notice link(s) here: <a href='https://onramper.com/privacy-policy' target='_blank' className='steel-pink-text fw-medium text-break'>https://onramper.com/privacy-policy/</a>. All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>
          </div>
          <h3 className='fw-semibold mb-3'>Information automatically collected</h3>
          <div className='fs-5'>
            <p><b className='text-capitalize'>In short:</b> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
            <p>We automatically collect certain information when you visit, use or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
            <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
            <p>The information we collect includes:</p>
            <div className="ps-5">
              <p><b>- Log and Usage Data:</b> Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called ‘crash dumps’) and hardware settings).</p>
              <p><b>- Device Data:</b> We collect device data such as information about your computer, phone, tablet or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system and system configuration information.</p>
              <p><b>- Location Data:</b> We collect location data such as information about your device’s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.</p>
            </div>
          </div>
          <h3 className='fw-semibold mb-3'>Information collected through our App</h3>
          <div className='fs-5'>
            <p><b>In Short: </b>We collect information regarding your geolocation, mobile device, push notifications, when you use our App. ‍If you use our App, we also collect the following information:</p>
            <div className="ps-5">
              <p><b>- Geolocation Information:</b> We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using our App, to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device’s settings.</p>
              <p><b>- Mobile Device Data:</b> We automatically collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our App, we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID and information about the features of our App you accessed.</p>
              <p><b>- Push Notifications:</b> We may request to send you push notifications regarding your account or certain features of the App. If you wish to opt-out from receiving these types of communications, you may turn them off in your device’s settings. This information is primarily needed to maintain the security and operation of our App, for troubleshooting and for our internal analytics and reporting purposes.</p>
            </div>
          </div>
        </Container>
      </section>
      <section id='section-2' className='mb-4'>
        <Container>
          <h2 className='text-uppercase fs-3 fw-semibold steel-pink-text mb-4'>{"2. " + tableOfContents[1]}</h2>
          <div className='fs-5'>
            <p><b className='text-capitalize'>In short:</b> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
            <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.</p>
            <p>We use the information we collect or receive:</p>
            <p><b>To facilitate account creation and logon process: </b>If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.</p>
            <p><b>To post testimonials: </b>We post testimonials on our Services that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at legal@neutronpay.com and be sure to include your name, testimonial location, and contact information.</p>
            <p><b>Request feedback: </b>We may use your information to request feedback and to contact you about your use of our Services.</p>
            <p><b>To enable user-to-user communications: </b>We may use your information in order to enable user-to-user communications with each user’s consent.</p>
            <p><b>To manage user accounts: </b>We may use your information for the purposes of managing our account and keeping it in working order.</p>
            <p><b>To send administrative information to you: </b>We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.To protect our Services. We may use your information as part of our efforts to keep our Services safe and secure (for example, for fraud monitoring and prevention).</p>
            <p><b>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</b></p>
            <p><b>To respond to legal requests and prevent harm: </b>If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</p>
            <p><b>Fulfill and manage your orders: </b>We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</p>
            <p><b>Administer prize draws and competitions: </b>We may use your information to administer prize draws and competitions when you elect to participate in our competitions.</p>
            <p><b>To deliver and facilitate delivery of services to the user: </b>We may use your information to provide you with the requested service.</p>
            <p><b>To respond to user inquiries/offer support to users: </b>We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</p>
            <p><b>To send you marketing and promotional communications: </b>We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Services, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the “WHAT ARE YOUR PRIVACY RIGHTS?” below).</p>
            <p><b>Deliver targeted advertising to you: </b>We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.</p>
            <p><b>For other business purposes: </b>We may use your information for other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Services, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.</p>
            <p><b>To deliver and facilitate delivery of services to the user: </b>We may use your information to provide you with the requested service.</p>
          </div>
        </Container>
      </section>
      <section id='section-3' className='mb-4'>
        <Container>
          <h2 className='text-uppercase fs-3 fw-semibold steel-pink-text mb-4'>{"3. " + tableOfContents[2]}</h2>
          <div className="fs-5">
            <p><b className='text-capitalize'>In short:</b> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            <p>We may process or share your data that we hold based on the following legal basis:</p>
            <p><b>Consent: </b>We may process your data if you have given us specific consent to use your personal information for a specific purpose.</p>
            <p><b>Legitimate Interests: </b>We may process your data when it is reasonably necessary to achieve our legitimate business interests.</p>
            <p><b>Performance of a Contract: </b>Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</p>
            <p><b>Legal Obligations: </b>We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</p>
            <p><b>Vital Interests: </b>We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</p>
            <p>More specifically, we may need to process your data or share your personal information in the following situations:</p>
            <p><b>Business Transfers: </b>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
            <p><b>Google Maps Platform APIs: </b>We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Place API). To find out more about Google’s Privacy Policy, please refer to this link. We obtain and store on your device (‘cache’) your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document.</p>
            <p><b>Affiliates: </b>We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.</p>
            <p><b>Business Partners: </b>We may share your information with our business partners to offer you certain products, services or promotions.</p>
          </div>
        </Container>
      </section>
      <section id='section-4' className='mb-4'>
        <Container>
          <h2 className='text-uppercase fs-3 fw-semibold steel-pink-text mb-4'>{"4. " + tableOfContents[3]}</h2>
          <div className="fs-5">
            <p><b>In Short: </b>We may use cookies and other tracking technologies to collect and store your information.</p>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
          </div>
        </Container>
      </section>
      <section id='section-5' className='mb-4'>
        <Container>
          <h2 className='text-uppercase fs-3 fw-semibold steel-pink-text mb-4'>{"5. " + tableOfContents[4]}</h2>
          <div className="fs-5">
            <p><b>In Short: </b>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than twenty four (24) months past the termination of the user’s account.</p>
            <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
          </div>
        </Container>
      </section>
      <section id='section-6' className='mb-4'>
        <Container>
          <h2 className='text-uppercase fs-3 fw-semibold steel-pink-text mb-4'>{"6. " + tableOfContents[5]}</h2>
          <div className="fs-5">
            <p><b>In Short: </b>We aim to protect your personal information through a system of organizational and technical security measures.</p>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
          </div>
        </Container>
      </section>
      <section id='section-7' className='mb-4'>
        <Container>
          <h2 className='text-uppercase fs-3 fw-semibold steel-pink-text mb-4'>{"7. " + tableOfContents[6]}</h2>
          <div className="fs-5">
            <p><b>In Short: </b>We do not knowingly collect data from or market to children under 18 years of age.</p>
            <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at legal@neutronpay.com.</p>
          </div>
        </Container>
      </section>
      <section id='section-8' className='mb-4'>
        <Container>
          <h2 className='text-uppercase fs-3 fw-semibold steel-pink-text mb-4'>{"8. " + tableOfContents[7]}</h2>
          <div className="fs-5">
            <p><b>In Short: </b>You may review, change, or terminate your account at any time.</p>
            <p>If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" className='steel-pink-text fw-medium text-break'>http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.</p>
            <p>If you are a resident in Switzerland, the contact details for the data protection authorities are available here: <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" className='steel-pink-text fw-medium text-break'>https://www.edoeb.admin.ch/edoeb/en/home.html</a>.</p>
            <p>If you have questions or comments about your privacy rights, you may email us at support@neutronpay.com.</p>
            <b>Account Information</b>
            <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
            <p>Log in to your account settings and update your user account.</p>
            <p>Contact us using the contact information provided.</p>
            <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.</p>
            <p><b>Cookies and similar technologies: </b>Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt-out of interest-based advertising by advertisers on our Services visit <a href="http://www.aboutads.info/choices/" className='steel-pink-text fw-medium text-break'>http://www.aboutads.info/choices/</a>.</p>
            <p><b>Opting out of email marketing: </b>You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list — however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:</p>
            <p>Access your account settings and update your preferences.</p>
            <p>Contact us using the contact information provided.</p>
          </div>
        </Container>
      </section>
      <section id='section-9' className='mb-4'>
        <Container>
          <h2 className='text-uppercase fs-3 fw-semibold steel-pink-text mb-4'>{"9. " + tableOfContents[8]}</h2>
          <p className='fs-5'>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>
        </Container>
      </section>
      <section id='section-10' className='mb-4'>
        <Container>
          <h2 className='text-uppercase fs-3 fw-semibold steel-pink-text mb-4'>{"10. " + tableOfContents[9]}</h2>
          <div className='fs-5'>
            <p><b>In Short: </b>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
            <p>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
            <p>If you are under 18 years of age, reside in California, and have a registered account with a Service, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).</p>

          </div>
        </Container>
      </section>
      <section id='section-11' className='mb-4'>
        <Container>
          <h2 className='text-uppercase fs-3 fw-semibold steel-pink-text mb-4'>{"11. " + tableOfContents[10]}</h2>
          <div className='fs-5'>
            <p><b>In Short: </b>Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
            <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
          </div>
        </Container>
      </section>
      <section id='section-12' className='mb-4'>
        <Container>
          <h2 className='text-uppercase fs-3 fw-semibold steel-pink-text mb-4'>{"12. " + tableOfContents[11]}</h2>
          <div className="fs-5">
            <p>If you have questions or comments about this notice, you may email us at legal@neutronpay.com or by post to:</p>
            <p>Neutronpay Inc.170 - 422 Richards St.</p>
            <p>Vancouver, British Columbia V6B0N7</p>
            <p>Canada</p>
          </div>
        
        </Container>
      </section>
    </>
  )
}

export default PrivacyPolicy