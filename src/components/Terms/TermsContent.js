import React from 'react';
import { Link } from '@material-ui/core';
// Redux

// Theme
import { withStyles } from '@material-ui/core/styles';

// Custom Components

const styles = () => ({
  container: {
    lineHeight: '1.5',
    fontFamily: 'Roboto',
    marginBottom: '5rem',
  },

  p: {
    margin: '1rem',
    display: 'block',
  },

  tableOfContents: {
    marginTop: '3rem',
    marginBottom: '3rem',
  },

  indented: {
    paddingLeft: '1.5em',
  },

  privacyPolicy: {
    marginTop: '5rem',
    marginBottom: '5rem',
  },

  termsOfUse: {
    marginTop: '5rem',
    marginBottom: '5rem',
  },

  title: {
    fontSize: '2.7rem',
  },
});

function TermsContent(props) {
  const { classes } = props;

  return (
    <div
      id='53c96499-e92d-456b-8538-3c8766648834'
      className={classes.container}
    >
      {/* <link rel="stylesheet" href="/styles.css" /> */}
      <header>
        <h1 className={`${classes.title} ${classes.p}`}>
          Privacy Policy and Terms of Use
        </h1>
      </header>
      <div className='page-body'>
        <p id='0c6586d9-49b9-4e60-a73e-37b2de04cd9f' className={classes.p} />
        <div className={classes.privacyPolicy}>
          <h1 id='147cd8db-f165-4953-8fc3-d048d1e71263' className={classes.p}>
            <strong>PRIVACY POLICY</strong>
          </h1>
          <p id='7854b7f2-6590-48b5-ab2f-631e3e9a08e2' className={classes.p}>
            <strong>Last updated April 5, 2021</strong>
          </p>
          <p id='66835df9-c05a-495d-9634-7d74dcac9d04' className={classes.p}>
            Thank you for choosing to be part of our community at College ARCH
            501(c)(3) (hereby referred to as “<strong>Organization</strong>
            ”, “ 
{' '}
<strong>we</strong>
            ”, “ 
{' '}
<strong>us</strong>
            ”, or “ <strong>our</strong>
            ”). We are committed to protecting your personal information and
            your right to privacy. If you have any questions or concerns about
            our policy, or our practices with regards to your personal
            information, please contact us at
{' '}
            <Link
              style={{ color: 'black' }}
              href='mailto:contact.collegearch@gmail.com'
            >
              contact.collegearch@gmail.com
            </Link>
            .
          </p>
          <p id='3187c025-d13c-4098-a5af-f54ebae8c420' className={classes.p}>
            When you visit our website collegearch.org and use our services, you
            trust us with your personal information. We take your privacy very
            seriously. In this privacy policy, we seek to explain to you in the
            clearest way possible what information we collect, how we use it and
            what rights you have in relation to it. We hope you take some time
            to read through it carefully, as it is important. If there are any
            terms in this privacy policy that you do not agree with, please
            discontinue use of our Sites and our services.
          </p>
          <p id='07a5ef95-89ed-44be-8159-a152cc1233dd' className={classes.p}>
            This privacy policy applies to all information collected through our
            website (such as collegearch.org), and/or any related services,
            sales, marketing or events (we refer to them collectively in this
            privacy policy as the &quot;
            <strong>Services</strong>
            &quot;).
          </p>
          <p id='71bc1412-a820-4959-805b-219360c9fbdb' className={classes.p}>
            <strong>
              Please read this privacy policy carefully as it will help you make
              informed decisions about sharing your personal information with
              us.
            </strong>
          </p>
          <div className={classes.tableOfContents}>
            <p id='8b473620-3aef-4a14-a476-7bad65e50136' className={classes.p}>
              <strong>TABLE OF CONTENTS</strong>
            </p>
            <p id='9bfbdf72-bfda-4dd7-a62d-d504fb67af8c' className={classes.p}>
              1.
{' '}
              <Link style={{ color: 'black' }} href='#1'>
                WHAT INFORMATION DO WE COLLECT?
              </Link>
            </p>
            <p id='da87a836-9db4-4b1c-9a28-5398c1cee69d' className={classes.p}>
              2.
{' '}
              <Link style={{ color: 'black' }} href='#2'>
                HOW DO WE USE YOUR INFORMATION?
              </Link>
            </p>
            <p id='065b1db9-600c-4f06-9fdf-48e0a3d4468b' className={classes.p}>
              3.
{' '}
              <Link style={{ color: 'black' }} href='#3'>
                WILL YOUR INFORMATION BE SHARED WITH ANYONE?
              </Link>
            </p>
            <p id='909139b0-df93-4899-8832-8a1938161f23' className={classes.p}>
              4.
{' '}
              <Link style={{ color: 'black' }} href='#4'>
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </Link>
            </p>
            <p id='c1408f12-b7db-4324-adc8-12c88f5460d5' className={classes.p}>
              5.
{' '}
              <Link style={{ color: 'black' }} href='#5'>
                HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </Link>
            </p>
            <p id='7c53900f-e6db-46c0-8ed4-f137095ea1dc' className={classes.p}>
              6.
{' '}
              <Link style={{ color: 'black' }} href='#6'>
                HOW LONG DO WE KEEP YOUR INFORMATION?
              </Link>
            </p>
            <p id='32981a1a-ed21-4d28-87a3-43826b15bed9' className={classes.p}>
              7.
{' '}
              <Link style={{ color: 'black' }} href='#7'>
                WHAT ARE YOUR PRIVACY RIGHTS?
              </Link>
            </p>
            <p id='cd199500-cbcb-4859-8cb7-7c3b965b43b6' className={classes.p}>
              8.
{' '}
              <Link style={{ color: 'black' }} href='#8'>
                DATA BREACH
              </Link>
            </p>
            <p id='d4eb827d-e11b-4f0a-8177-b9c7687d67d7' className={classes.p}>
              9.
{' '}
              <Link style={{ color: 'black' }} href='#9'>
                CONTROLS FOR DO-NOT-TRACK FEATURES
              </Link>
            </p>
            <p id='36c256de-118b-411b-985a-0b534b30c2e0' className={classes.p}>
              10.
{' '}
              <Link style={{ color: 'black' }} href='#10'>
                DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </Link>
            </p>
            <p id='d895d080-9b45-4827-a2b3-7951b7d7865e' className={classes.p}>
              11.
{' '}
              <Link style={{ color: 'black' }} href='#11'>
                DO WE MAKE UPDATES TO THIS POLICY?
              </Link>
            </p>
            <p id='c3022df5-1f4c-4c08-bda2-29511dc53f5b' className={classes.p}>
              12.
{' '}
              <Link style={{ color: 'black' }} href='#12'>
                HOW CAN YOU CONTACT US ABOUT THIS POLICY?
              </Link>
            </p>
          </div>
          <p id='9d9e0fd0-f03d-485c-9782-0c016c8707ce' className={classes.p}>
            <strong id='1'>1. WHAT INFORMATION DO WE COLLECT?</strong>
            <div className={classes.indented}>
              <p
                id='810a0a53-323e-4ff3-9316-1095b19c203d'
                className={classes.p}
              >
                <strong>Personal information you disclose to us</strong>
              </p>
              <p
                id='758629b5-429a-45cb-9928-3bca406e2ea6'
                className={classes.p}
              >
                <strong>In Short:</strong>
                <strong> </strong>
                We collect personal information that you provide to us.
              </p>
              <p
                id='c08593df-b4ec-46f9-a16f-0ac0f933aaf9'
                className={classes.p}
              >
                We collect personal information that you voluntarily provide to
                us when registering at the Services expressing an interest in
                obtaining information about us or our products and services,
                when participating in activities on the Services (such as
                posting messages in our online forums or entering competitions,
                contests or giveaways) or otherwise contacting us.
              </p>
              <p
                id='bc43319c-586b-4b0c-a149-bf79a197d3ea'
                className={classes.p}
              >
                The personal information that we collect depends on the context
                of your interactions with us and the Services, the choices you
                make and the products and features you use. The personal
                information we collect can include the following:
              </p>
              <p
                id='d509c8b9-871b-4795-8338-52cdc7abb76b'
                className={classes.p}
              >
                <strong>Publicly Available Personal Information.</strong>
{' '}
We
                collect first name, maiden name, last name, and nickname; email
                addresses; social media; and other similar data.
</p>
              <p
                id='8a4b100a-6fc1-4bf7-9296-71eee924144b'
                className={classes.p}
              >
                <strong>Personal Information Provided by You.</strong>
{' '}
We
                collect app usage; and other similar data.
</p>
              <p
                id='b5cf220d-58b3-4914-9649-4b6f55956117'
                className={classes.p}
              >
                <strong>Social Media Login Data.</strong>
{' '}
We may provide you
                with the option to register using social media account details,
                like your Facebook, Twitter or other social media account. If
                you choose to register in this way, we will collect the
                Information described in the section called &quot;HOW DO WE
                HANDLE YOUR SOCIAL LOGINS&quot; below.
</p>
              <p
                id='b7e9b91d-d75d-44a1-8664-161f8b2fbf3b'
                className={classes.p}
              >
                All personal information that you provide to us must be true,
                complete and accurate, and you must notify us of any changes to
                such personal information.
              </p>
            </div>
          </p>
          <p id='e13039f7-17b7-4ba5-ac13-f7f0e59f6fd1' className={classes.p}>
            <strong id='2'>2. HOW DO WE USE YOUR INFORMATION?</strong>
            <div className={classes.indented}>
              <p
                id='2800bc94-ff89-46d9-8440-7be3e15a176e'
                className={classes.p}
              >
                <strong>In Short: </strong>
                We process your information for purposes based on legitimate
                business interests, the fulfillment of our contract with you,
                compliance with our legal obligations, and/or your consent.
              </p>
              <p
                id='df16f9bb-72db-4369-a645-52eb2583adec'
                className={classes.p}
              >
                We use personal information collected via our Services for a
                variety of business purposes described below. We process your
                personal information for these purposes in reliance on our
                legitimate business interests, in order to enter into or perform
                a contract with you, with your consent, and/or for compliance
                with our legal obligations. We indicate the specific processing
                grounds we rely on next to each purpose listed below.
              </p>
              <p
                id='551b4cf1-f384-40a0-ac1a-6d9518fb0357'
                className={classes.p}
              >
                We use the information we collect or receive:
              </p>
              <ul
                id='42d8122c-d4f4-42fc-be5f-c328d5156ba4'
                className='bulleted-list'
              >
                <li>
                  <strong>
                    To facilitate account creation and logon process.
                  </strong>
{' '}
                  If you choose to link your account with us to a third party
                  account (such as your Google or Facebook account), we use the
                  information you allowed us to collect from those third parties
                  to facilitate account creation and logon process for the
                  performance of the contract. See the section below headed
                  &quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS&quot; for further
                  information.
                </li>
              </ul>
              <ul
                id='9f127af8-9f63-43bb-aa37-da3dc401e96f'
                className='bulleted-list'
              >
                <li>
                  <strong>
                    To send you marketing and promotional communications.
                  </strong>
{' '}
                  We and/or our third party marketing partners may use the
                  personal information you send to us for our marketing
                  purposes, if this is in accordance with your marketing
                  preferences. You can opt-out of our marketing emails at any
                  time (see the &quot;WHAT ARE YOUR PRIVACY RIGHTS&quot; below).
                </li>
              </ul>
              <ul
                id='83321553-00fe-4cd1-8f64-8bfaef40234a'
                className='bulleted-list'
              >
                <li>
                  <strong>Request Feedback.</strong>
{' '}
We may use your information
                  to request feedback and to contact you about your use of our
                  Services.
</li>
              </ul>
              <ul
                id='ea448fce-de2c-4ab7-947f-0b1958500973'
                className='bulleted-list'
              >
                <li>
                  <strong>
                    To enforce our terms, conditions and policies for Business
                    Purposes, Legal Reasons and Contractual.
                  </strong>
                </li>
              </ul>
              <ul
                id='3ea59f9c-8724-44e2-9a94-fcdd339ab115'
                className='bulleted-list'
              >
                <li>
                  <strong>
                    To respond to legal requests and prevent harm.
{' '}
                  </strong>
                  If we receive a subpoena or other legal request, we may need
                  to inspect the data we hold to determine how to respond.
                </li>
              </ul>
              <ul
                id='5b5d1838-873d-406e-9f0a-c2e6f5aedd52'
                className='bulleted-list'
              >
                <li>
                  <strong>For other Business Purposes.</strong>
{' '}
We may use your
                  information for other Business Purposes, such as data
                  analysis, identifying usage trends, determining the
                  effectiveness of our promotional campaigns and to evaluate and
                  improve our Services, products, marketing and your experience.
                  We may use and store this information in aggregated and
                  anonymized form so that it is not associated with individual
                  end users and does not include personal information. We will
                  not use identifiable personal information without your
                  consent.
</li>
              </ul>
            </div>
          </p>
          <p id='edee8f08-7945-4965-b8fb-87ac2f1dd000' className={classes.p}>
            <strong id='3'>
              3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </strong>
            <div className={classes.indented}>
              <p
                id='4d39a123-f1a2-427b-9731-f7876173d885'
                className={classes.p}
              >
                <strong>In Short:</strong>
                <strong> </strong>
                We only share information with your consent, to comply with
                laws, to provide you with services, to protect your rights, or
                to fulfill business obligations.
              </p>
              <p
                id='808d6c71-77b7-4a7b-ae2c-5c1f98f8e012'
                className={classes.p}
              >
                We may process or share data based on the following legal basis:
              </p>
              <ul
                id='ef4dd8ff-9a82-4b78-8d70-8962be57f18f'
                className='bulleted-list'
              >
                <li>
                  <strong>Consent:</strong>
{' '}
We may process your data if you have
                  given us specific consent to use your personal information in
                  a specific purpose.
</li>
              </ul>
              <ul
                id='03285a79-43dc-405e-af1f-8dd8ab2c8d5c'
                className='bulleted-list'
              >
                <li>
                  <strong>Legitimate Interests:</strong>
{' '}
We may process your
                  data when it is reasonably necessary to achieve our legitimate
                  business interests.
</li>
              </ul>
              <ul
                id='47eac016-3621-45d3-9a2f-cfeec61a4259'
                className='bulleted-list'
              >
                <li>
                  <strong>Performance of a Contract: </strong>
                  Where we have entered into a contract with you, we may process
                  your personal information to fulfill the terms of our
                  contract.
                </li>
              </ul>
              <ul
                id='8a3a6d4f-a2ac-4a1f-a161-1d6299f417a6'
                className='bulleted-list'
              >
                <li>
                  <strong>Legal Obligations:</strong>
{' '}
We may disclose your
                  information where we are legally required to do so in order to
                  comply with applicable law, governmental requests, a judicial
                  proceeding, court order, or legal process, such as in response
                  to a court order or a subpoena (including in response to
                  public authorities to meet national security or law
                  enforcement requirements).
</li>
              </ul>
              <ul
                id='7fbfd626-8288-4f1c-9a17-7b7d7db68745'
                className='bulleted-list'
              >
                <li>
                  <strong>Vital Interests:</strong>
{' '}
We may disclose your
                  information where we believe it is necessary to investigate,
                  prevent, or take action regarding potential violations of our
                  policies, suspected fraud, situations involving potential
                  threats to the safety of any person and illegal activities, or
                  as evidence in litigation in which we are involved.
</li>
              </ul>
              <p
                id='5a5eaf32-cbee-4547-9d16-1629f00afa3e'
                className={classes.p}
              >
                More specifically, we may need to process your data or share
                your personal information in the following situations:
              </p>
              <p
                id='fb6f4f0d-8e18-48d1-9852-385e940d9c8d'
                className={classes.p}
              >
                <strong>Business Transfers.</strong>
{' '}
We may share or transfer
                your information in connection with, or during negotiations of,
                any merger, sale of organization assets, financing, or
                acquisition of all or a portion of our business to another
                organization.
</p>
              <p
                id='9853b775-256c-4665-b1f3-6e5dc1dcbea2'
                className={classes.p}
              >
                <strong>Third-Party Advertisers.</strong>
{' '}
We may use third-party
                advertising companies to serve ads when you visit the Services.
                These companies may use information about your visits to our
                Website(s) and other websites that are contained in web cookies
                and other tracking technologies in order to provide
                advertisements about goods and services of interest to you.
</p>
            </div>
          </p>
          <p id='6e62d95d-0d4a-4513-a8b2-1ddda9e0d6e5' className={classes.p}>
            <strong id='4'>
              4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </strong>
            <div className={classes.indented}>
              <p
                id='6cb0ebff-416a-4dd0-8d20-90289598216a'
                className={classes.p}
              >
                <strong>In Short:</strong>
                <strong> </strong>
                We may use cookies and other tracking technologies to collect
                and store your information.
              </p>
              <p
                id='cb462fba-936e-4f2b-88dc-6c5e047d25c8'
                className={classes.p}
              >
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to access or store information. Specific
                information about how we use such technologies and how you can
                refuse certain cookies is set out in our Cookie Policy.
              </p>
            </div>
          </p>
          <p id='878ae54d-0fc4-4fd0-bc00-326539dde0f1' className={classes.p}>
            <strong id='5'>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</strong>
            <div className={classes.indented}>
              <p
                id='2d1b1b01-b64c-4010-987b-d0315ab24c97'
                className={classes.p}
              >
                <strong>In Short:</strong>
                <strong> </strong>
                If you choose to register or log in to our services using a
                social media account, we may have access to certain information
                about you.
              </p>
              <p
                id='73ba4b10-9b85-4eca-988b-a978d4f90ded'
                className={classes.p}
              >
                Our Services offer you the ability to register and login using
                your third party social media account details (like your
                Facebook or Twitter logins). Where you choose to do this, we
                will receive certain profile information about you from your
                social media provider. The profile Information we receive may
                vary depending on the social media provider concerned, but will
                often include your name, e-mail address, friends list, profile
                picture as well as other information you choose to make public.
              </p>
              <p
                id='02cf7d87-9d07-4c9a-b753-1d5fdc7d25c5'
                className={classes.p}
              >
                We will use the information we receive only for the purposes
                that are described in this privacy policy or that are otherwise
                made clear to you on the Services. Please note that we do not
                control, and are not responsible for, other uses of your
                personal information by your third party social media provider.
                We recommend that you review their privacy policy to understand
                how they collect, use and share your personal information, and
                how you can set your privacy preferences on their sites and
                apps.
              </p>
            </div>
          </p>
          <p id='57dab63a-1506-4865-8055-6e7abee771cd' className={classes.p}>
            <strong id='6'>6. HOW LONG DO WE KEEP YOUR INFORMATION?</strong>
            <div className={classes.indented}>
              <p
                id='8ac64cd1-b3e1-4119-8806-abd4354d450b'
                className={classes.p}
              >
                <strong>In Short:</strong>
                <strong> </strong>
                We keep your information for as long as necessary to fulfill the
                purposes outlined in this privacy policy unless otherwise
                required by law.
              </p>
              <p
                id='4ea54df1-265e-4e1a-9a4f-7cb93466221a'
                className={classes.p}
              >
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this privacy policy,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting or other legal requirements). No
                purpose in this policy will require us keeping your personal
                information for longer than the period of time in which users
                have an account with us.
              </p>
              <p
                id='c2855223-c7a6-4319-b5b0-dbb0512e9ef6'
                className={classes.p}
              >
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize it, or,
                if this is not possible (for example, because your personal
                information has been stored in backup archives), then we will
                securely store your personal information and isolate it from any
                further processing until deletion is possible.
              </p>
            </div>
          </p>
          <p id='dc5a8bf6-c1f2-4fb0-a4a6-a66ff1a2cbf9' className={classes.p}>
            <strong id='7'>7. WHAT ARE YOUR PRIVACY RIGHTS?</strong>
            <div className={classes.indented}>
              <p
                id='29ad5dcb-2de7-4b85-bad4-6389c8e308d3'
                className={classes.p}
              >
                <strong>In Short:</strong>
                <strong> </strong>
                You may review, change, or terminate your account at any time.
              </p>
              <p
                id='da37daa3-7f3e-4738-bbbc-359b71a4c3c2'
                className={classes.p}
              >
                If you are resident in the European Economic Area and you
                believe we are unlawfully processing your personal information,
                you also have the right to complain to your local data
                protection supervisory authority. You can find their contact
                details here:
{' '}
                <Link href='http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm'>
                  http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                </Link>
                .
              </p>
              <p
                id='da1f848c-f25a-4676-ad96-599d6e766132'
                className={classes.p}
              >
                If you have questions or comments about your privacy rights, you
                may email us at
{' '}
                <Link href='mailto:contact.collegearch@gmail.com'>
                  contact.collegearch@gmail.com
                </Link>
                .
              </p>
              <p
                id='65bc84a6-cbf9-4a4d-989c-6aacf5b647f2'
                className={classes.p}
              >
                <strong>Account Information</strong>
              </p>
              <p
                id='7178f6d8-c22a-4c5f-85b7-af646d8c02f1'
                className={classes.p}
              >
                If you would at any time like to review or change the
                information in your account or terminate your account, you can:
              </p>
              <p
                id='fa3a9d3f-0d7a-4663-89ff-a5f91404750b'
                className={classes.p}
              >
                Upon your request to terminate your account, we will deactivate
                or delete your account and information from our active
                databases. However, some information may be retained in our
                files to prevent fraud, troubleshoot problems, assist with any
                investigations, enforce our Terms of Use and/or comply with
                legal requirements.
              </p>
              <p
                id='69d30c4c-ad57-4545-9859-ece66f60c075'
                className={classes.p}
              >
                <strong>Cookies and similar technologies:</strong>
                <strong> </strong>
                Most Web browsers are set to accept cookies by default. If you
                prefer, you can usually choose to set your browser to remove
                cookies and to reject cookies. If you choose to remove cookies
                or reject cookies, this could affect certain features or
                services of our Services. To opt-out of interest-based
                advertising by advertisers on our Services visit
{' '}
                <Link href='http://www.aboutads.info/choices'>
                  http://www.aboutads.info/choices
                </Link>
                .
              </p>
              <p
                id='bedd4f09-2d78-4f9e-8410-bbb851f1a60d'
                className={classes.p}
              >
                <strong>Opting out of email marketing:</strong>
                <strong> </strong>
                You can unsubscribe from our marketing email list at any time by
                clicking on the unsubscribe link in the emails that we send or
                by contacting us using the details provided below. You will then
                be removed from the marketing email list – however, we will
                still need to send you service-related emails that are necessary
                for the administration and use of your account. To otherwise
                opt-out, you may:
              </p>
            </div>
          </p>
          <p id='f8911af3-7e95-4eec-8675-123e583ff60d' className={classes.p}>
            <strong id='8'>8. DATA BREACH</strong>
            <div className={classes.indented}>
              <p
                id='1eb18299-4fc6-4b0a-ba2d-e28c9d848f3a'
                className={classes.p}
              >
                A privacy breach occurs when there is unauthorized access to or
                collection, use, disclosure or disposal of personal information.
                You will be notified about data breaches when College ARCH
                believes you are likely to be at risk or serious harm. For
                example, a data breach may be likely to result in serious
                financial harm or harm to your mental or physical well-being. In
                the event that College ARCH becomes aware of a security breach
                which has resulted or may result in unauthorized access, use or
                disclosure of personal information College ARCH will promptly
                investigate the matter and notify the applicable Supervisory
                Authority not later than 72 hours after having become aware of
                it, unless the personal data breach is unlikely to result in a
                risk to the rights and freedoms of natural persons.
              </p>
            </div>
          </p>
          <p id='3017282e-eae3-4f5b-8f0e-930ea9f5cd04' className={classes.p}>
            <strong id='9'>9. CONTROLS FOR DO-NOT-TRACK FEATURES</strong>
            <div className={classes.indented}>
              <p
                id='32e509e9-7d37-40e0-89d8-60bc7072a586'
                className={classes.p}
              >
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track (“DNT”) feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. No uniform technology standard for recognizing and
                implementing DNT signals has been finalized. As such, we do not
                currently respond to DNT browser signals or any other mechanism
                that automatically communicates your choice not to be tracked
                online. If a standard for online tracking is adopted that we
                must follow in the future, we will inform you about that
                practice in a revised version of this privacy policy.
              </p>
            </div>
          </p>
          <p id='171e564a-9d28-4800-8bd7-457b37d90c1f' className={classes.p}>
            <strong id='10'>
              10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </strong>
            <div className={classes.indented}>
              <p
                id='41aa703f-c7ea-4f53-8045-4f1ae3face5b'
                className={classes.p}
              >
                <strong>In Short:</strong>
                <strong> </strong>
                Yes, if you are a resident of California, you are granted
                specific rights regarding access to your personal information.
              </p>
              <p
                id='e3bc8425-f3fb-43e9-9e62-7ceaa6740803'
                className={classes.p}
              >
                California Civil Code Section 1798.83, also known as the “Shine
                The Light” law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us using the
                contact information provided below.
              </p>
              <p
                id='55961177-ce94-4db8-aa60-a1a9ec47b3a4'
                className={classes.p}
              >
                If you are under 18 years of age, reside in California, and have
                a registered account with the Services, you have the right to
                request removal of unwanted data that you publicly post on the
                Services. To request removal of such data, please contact us
                using the contact information provided below, and include the
                email address associated with your account and a statement that
                you reside in California. We will make sure the data is not
                publicly displayed on the Services, but please be aware that the
                data may not be completely or comprehensively removed from our
                systems.
              </p>
            </div>
          </p>
          <p id='4eedea27-48e2-48cd-93c8-ff829ab8bdc7' className={classes.p}>
            <strong id='11'>11. DO WE MAKE UPDATES TO THIS POLICY?</strong>
            <div className={classes.indented}>
              <p
                id='8951d1a0-3ef5-4ea0-a82f-1f8ce57bbda0'
                className={classes.p}
              >
                <strong>In Short:</strong>
                <strong> </strong>
                Yes, we will update this policy as necessary to stay compliant
                with relevant laws.
              </p>
              <p
                id='ead70c29-b2c0-479c-a465-9e5c27a90a5f'
                className={classes.p}
              >
                We may update this privacy policy from time to time. The updated
                version will be indicated by an updated “Revised” date and the
                updated version will be effective as soon as it is accessible.
                If we make material changes to this privacy policy, we may
                notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy policy frequently to be informed of
                how we are protecting your information.
              </p>
            </div>
          </p>
          <p id='01b768a4-6360-4798-997d-63595bb27646' className={classes.p}>
            <strong id='12'>
              12. HOW CAN YOU CONTACT US ABOUT THIS POLICY?
            </strong>
            <div className={classes.indented}>
              <p
                id='a27a70db-ff4b-4772-82f5-52b0a0e8e50e'
                className={classes.p}
              >
                If you have questions or comments about this policy, you may
                email us at
{' '}
                <Link href='mailto:contact.collegearch@gmail.com'>
                  contact.collegearch@gmail.com
                </Link>
              </p>
            </div>
          </p>
          <p id='51ea09f2-75c3-4fb2-a47f-716c15d642b0' className={classes.p}>
            <strong>
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </strong>
            <div className={classes.indented}>
              <p
                id='56104237-683b-447b-bc1e-58f581320b54'
                className={classes.p}
              >
                Based on the laws of some countries, you may have the right to
                request access to the personal information we collect from you,
                change that information, or delete it in some circumstances. To
                request to review, update, or delete your personal information,
                please email us at contact.collegearch@gmail.com. We will
                respond to your request within 30 days.
              </p>
            </div>
          </p>
        </div>
        <div className={classes.termsOfUse}>
          <h1 id='2a3c63f7-2ab6-4ef4-9bf6-b4f212746436' className={classes.p}>
            <strong>TERMS OF USE</strong>
          </h1>
          <p id='755158b9-8385-4948-b666-30b95530e330' className={classes.p}>
            <strong>Last updated: April 5th, 2021</strong>
          </p>
          <p id='ccb649cf-5fec-4393-9452-926485cc2525' className={classes.p}>
            <strong>AGREEMENT TO TERMS</strong>
          </p>
          <p id='0429a79b-1cfc-4e68-a02a-36c2601958b7' className={classes.p}>
            These Terms of Use constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity (“you”)
            and College ARCH (&quot;
            <strong>organization</strong>
            &quot;, “ 
{' '}
<strong>we</strong>
            ”, “ <strong>us</strong>
            ”, or “ 
{' '}
<strong>our</strong>
            ”), concerning your access to and use of the
{' '}
            <Link>https://collegearch.org</Link> website as well as any other
            media form, media channel, mobile website or mobile application
            related, linked, or otherwise connected thereto (collectively, the
            “Site”). You agree that by accessing the Site, you have read,
            understood, and agreed to be bound by all of these Terms of Use. IF
            YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE
            EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE
            USE IMMEDIATELY.
          </p>
          <p id='5f0951de-7816-444b-955c-610b60806f87' className={classes.p}>
            Supplemental terms and conditions or documents that may be posted on
            the Site from time to time are hereby expressly incorporated herein
            by reference. We reserve the right, in our sole discretion, to make
            changes or modifications to these Terms of Use at any time and for
            any reason. We will alert you about any changes by updating the
            “Last updated” date of these Terms of Use, and you waive any right
            to receive specific notice of each such change. It is your
            responsibility to periodically review these Terms of Use to stay
            informed of updates. You will be subject to, and will be deemed to
            have been made aware of and to have accepted, the changes in any
            revised Terms of Use by your continued use of the Site after the
            date such revised Terms of Use are posted.
          </p>
          <p id='f6c07c76-48e4-4814-a978-e4893b2200ab' className={classes.p}>
            The information provided on the Site is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Site from other locations do so on
            their own initiative and are solely responsible for compliance with
            local laws, if and to the extent local laws are applicable.
          </p>
          <p id='722385e9-b89e-4221-8c2a-e8b2905e57ca' className={classes.p}>
            <strong>INTELLECTUAL PROPERTY RIGHTS</strong>
          </p>
          <p id='63eac7fd-b597-40f3-8e3c-63c6b902aa9f' className={classes.p}>
            Unless otherwise indicated, the Site is our proprietary property and
            all source code, databases, functionality, software, website
            designs, audio, video, text, photographs, and graphics on the Site
            (collectively, the “Content”) and the trademarks, service marks, and
            logos contained therein (the “Marks”) are owned or controlled by us
            or licensed to us, and are protected by copyright and trademark laws
            and various other intellectual property rights and unfair
            competition laws of the United States, international copyright laws,
            and international conventions. The Content and the Marks are
            provided on the Site “AS IS” for your information and personal use
            only. Except as expressly provided in these Terms of Use, no part of
            the Site and no Content or Marks may be copied, reproduced,
            aggregated, republished, uploaded, posted, publicly displayed,
            encoded, translated, transmitted, distributed, sold, licensed, or
            otherwise exploited for any commercial purpose whatsoever, without
            our express prior written permission.
          </p>
          <p id='52b7120f-5af4-4eca-a3d2-fd1d04dd9dc5' className={classes.p}>
            Provided that you are eligible to use the Site, you are granted a
            limited license to access and use the Site and to download or print
            a copy of any portion of the Content to which you have properly
            gained access solely for your personal, non-commercial use. We
            reserve all rights not expressly granted to you in and to the Site,
            the Content and the Marks.
          </p>
          <p id='1e7f33ad-c53b-45c5-b012-79c042463994' className={classes.p}>
            <strong>USER REPRESENTATIONS</strong>
          </p>
          <p id='263d7364-1492-446c-bdf0-e23dbe52fa05' className={classes.p}>
            By using the Site, you represent and warrant that: (1) you have the
            legal capacity and you agree to comply with these Terms of Use; (2)
            you will not access the Site through automated or non-human means,
            whether through a bot, script, or otherwise; (3) you will not use
            the Site for any illegal or unauthorized purpose; and (4) your use
            of the Site will not violate any applicable law or regulation.
          </p>
          <p id='f64337ee-9fe1-40e1-8cd8-67f6bc6538b0' className={classes.p}>
            If you provide any information that is untrue, inaccurate, not
            current, or incomplete, we have the right to suspend or terminate
            your account and refuse any and all current or future use of the
            Site (or any portion thereof).
          </p>
          <p id='52ecf149-728d-4ffe-abda-b455e0cdffe2' className={classes.p}>
            <strong>PROHIBITED ACTIVITIES</strong>
          </p>
          <p id='588a460b-3b94-478d-a207-ab6c103da0f8' className={classes.p}>
            You may not access or use the Site for any purpose other than that
            for which we make the Site available. The Site may not be used in
            connection with any commercial endeavors except those that are
            specifically endorsed or approved by us.
          </p>
          <p id='af964c8c-cd10-46b9-9e71-23e829b018fa' className={classes.p}>
            As a user of the Site, you agree not to:
          </p>
          <p id='d011e48c-8c26-4711-ade0-e72dfea3bd1d' className={classes.p}>
            <strong>USER GENERATED CONTRIBUTIONS</strong>
{' '}
          </p>
          <p id='cb012d0d-04c1-4e90-97d6-105290187f4d' className={classes.p}>
            The Site does not offer users to submit or post content. We may
            provide you with the opportunity to create, submit, post, display,
            transmit, perform, publish, distribute, or broadcast content and
            materials to us or on the Site, including but not limited to text,
            writings, video, audio, photographs, graphics, comments,
            suggestions, or personal information or other material
            (collectively, &quot;Contributions&quot;). Contributions may be
            viewable by other users of the Site and through third-party
            websites. As such, any Contributions you transmit may be treated in
            accordance with the Site Privacy Policy. When you create or make
            available any Contributions, you thereby represent and warrant that:
          </p>
          <p id='adf0a15e-f71c-4983-86ac-a51af2c2f4bf' className={classes.p}>
            1. The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading, or copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral rights of any third party.
          </p>
          <p id='5dc74d7e-3a75-4317-a7d5-65af692f177a' className={classes.p}>
            2. You are the creator and owner of or have the necessary licenses,
            rights, consents, releases, and permissions to use and to authorize
            us, the Site, and other users of the Site to use your Contributions
            in any manner contemplated by the Site and these Terms of Use.
          </p>
          <p id='5a3ee460-6da1-40b5-8dc7-5fa86877087f' className={classes.p}>
            3. You have the written consent, release, and/or permission of each
            and every identifiable individual person in your Contributions to
            use the name or likeness of each and every such identifiable
            individual person to enable inclusion and use of your Contributions
            in any manner contemplated by the Site and these Terms of Use.
          </p>
          <p id='9225bcc0-60d3-48d3-9502-5d3732fffa8b' className={classes.p}>
            4. Your Contributions are not false, inaccurate, or misleading.
          </p>
          <p id='296024a5-a133-429b-b836-c432763765d8' className={classes.p}>
            5. Your Contributions are not unsolicited or unauthorized
            advertising, promotional materials, pyramid schemes, chain letters,
            spam, mass mailings, or other forms of solicitation.
          </p>
          <p id='1c236b4e-da90-4bd7-bd84-7ad2f28b5c45' className={classes.p}>
            6. Your Contributions are not obscene, lewd, lascivious, filthy,
            violent, harassing, libelous, slanderous, or otherwise objectionable
            (as determined by us).
          </p>
          <p id='7146a48f-daf5-4c11-b024-d4a774a22d2d' className={classes.p}>
            7. Your Contributions do not ridicule, mock, disparage, intimidate,
            or abuse anyone.
          </p>
          <p id='adf7847b-f427-4fe0-8a6e-3b321e8e838c' className={classes.p}>
            8. Your Contributions do not advocate the violent overthrow of any
            government or incite, encourage, or threaten physical harm against
            another.
          </p>
          <p id='49ed8d6b-e4ab-447a-892d-9122fa9f1f34' className={classes.p}>
            9. Your Contributions do not violate any applicable law, regulation,
            or rule.
          </p>
          <p id='19528e56-7403-4f72-a8d6-32b88a7c228b' className={classes.p}>
            10. Your Contributions do not violate the privacy or publicity
            rights of any third party.
          </p>
          <p id='ff203d5e-4234-498b-ae59-37b061222aa6' className={classes.p}>
            11. Your Contributions do not contain any material that solicits
            personal information from anyone under the age of 18 or exploits
            people under the age of 18 in a sexual or violent manner.
          </p>
          <p id='b1efeca5-793e-4686-ab75-ef0672420eaa' className={classes.p}>
            12. Your Contributions do not violate any applicable law concerning
            child pornography, or otherwise intended to protect the health or
            well-being of minors;
          </p>
          <p id='72b02651-68eb-43b6-8e85-4e29844fff2a' className={classes.p}>
            13. Your Contributions do not include any offensive comments that
            are connected to race, national origin, gender, sexual preference,
            or physical handicap.
          </p>
          <p id='4e4ad38e-1a26-4cce-85e6-7fbf9c20d1e3' className={classes.p}>
            14. Your Contributions do not otherwise violate, or link to material
            that violates, any provision of these Terms of Use, or any
            applicable law or regulation.
          </p>
          <p id='3c51157e-b0ca-45a7-b23c-75debe3b45a5' className={classes.p}>
            Any use of the Site in violation of the foregoing violates these
            Terms of Use and may result in, among other things, termination or
            suspension of your rights to use the Site.
          </p>
          <p id='08500547-58db-468e-86e0-d5a53c880914' className={classes.p}>
            <strong>CONTRIBUTION LICENSE</strong>
          </p>
          <p id='2274b436-baa6-4963-b033-c8722df5607c' className={classes.p}>
            You and the Site agree that we may access, store, process, and use
            any information and personal data that you provide following the
            terms of the Privacy Policy and your choices (including settings).
          </p>
          <p id='dfcca446-78b3-4a9a-9619-ca86e07636fd' className={classes.p}>
            By submitting suggestions or other feedback regarding the Site, you
            agree that we can use and share such feedback for any purpose
            without compensation to you.
          </p>
          <p id='78ea0920-ff99-455d-ab48-ce9c1e3d8557' className={classes.p}>
            We do not assert any ownership over your Contributions. You retain
            full ownership of all of your Contributions and any intellectual
            property rights or other proprietary rights associated with your
            Contributions. We are not liable for any statements or
            representations in your Contributions provided by you in any area on
            the Site. You are solely responsible for your Contributions to the
            Site and you expressly agree to exonerate us from any and all
            responsibility and to refrain from any legal action against us
            regarding your Contributions.
          </p>
          <p id='e78fe631-4c17-420d-80f8-62a79338b2da' className={classes.p}>
            <strong>SUBMISSIONS</strong>
          </p>
          <p id='01d2ab43-3c25-467a-b7ca-a881672faee6' className={classes.p}>
            You acknowledge and agree that any questions, comments, suggestions,
            ideas, feedback, or other information regarding the Site
            (&quot;Submissions&quot;) provided by you to us are non-confidential
            and shall become our sole property. We shall own exclusive rights,
            including all intellectual property rights, and shall be entitled to
            the unrestricted use and dissemination of these Submissions for any
            lawful purpose, commercial or otherwise, without acknowledgment or
            compensation to you. You hereby waive all moral rights to any such
            Submissions, and you hereby warrant that any such Submissions are
            original with you or that you have the right to submit such
            Submissions. You agree there shall be no recourse against us for any
            alleged or actual infringement or misappropriation of any
            proprietary right in your Submissions.
          </p>
          <p id='491e172a-5962-4a99-bbae-64e64dac2222' className={classes.p}>
            <strong>SITE MANAGEMENT</strong>
          </p>
          <p id='04061676-bb3b-4e4d-92d4-4b5965d20116' className={classes.p}>
            We reserve the right, but not the obligation, to: (1) monitor the
            Site for violations of these Terms of Use; (2) take appropriate
            legal action against anyone who, in our sole discretion, violates
            the law or these Terms of Use, including without limitation,
            reporting such user to law enforcement authorities; (3) in our sole
            discretion and without limitation, refuse, restrict access to, limit
            the availability of, or disable (to the extent technologically
            feasible) any of your Contributions or any portion thereof; (4) in
            our sole discretion and without limitation, notice, or liability, to
            remove from the Site or otherwise disable all files and content that
            are excessive in size or are in any way burdensome to our systems;
            and (5) otherwise manage the Site in a manner designed to protect
            our rights and property and to facilitate the proper functioning of
            the Site.
          </p>
          <p id='7105c9c1-15fd-4761-bb64-f77d77e00043' className={classes.p}>
            <strong>TERM AND TERMINATION</strong>
          </p>
          <p id='0222f79e-4ce2-453a-91d5-d00cd9b6975f' className={classes.p}>
            These Terms of Use shall remain in full force and effect while you
            use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF
            USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
            NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING
            BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR
            NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
            REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF
            USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR
            USE OR PARTICIPATION IN THE SITE OR DELETE ANY CONTENT OR
            INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR
            SOLE DISCRETION.
          </p>
          <p id='6c042f44-e8e0-4ba7-834b-460585d55728' className={classes.p}>
            If we terminate or suspend your account for any reason, you are
            prohibited from registering and creating a new account under your
            name, a fake or borrowed name, or the name of any third party, even
            if you may be acting on behalf of the third party. In addition to
            terminating or suspending your account, we reserve the right to take
            appropriate legal action, including without limitation pursuing
            civil, criminal, and injunctive redress.
          </p>
          <p id='404851f0-0db6-4493-b9cb-cd57faea9fb0' className={classes.p}>
            <strong>MODIFICATIONS AND INTERRUPTIONS</strong>
          </p>
          <p id='e96f93c8-5006-4fbf-aeb6-f6ee6fe38257' className={classes.p}>
            We reserve the right to change, modify, or remove the contents of
            the Site at any time or for any reason at our sole discretion
            without notice. However, we have no obligation to update any
            information on our Site. We also reserve the right to modify or
            discontinue all or part of the Site without notice at any time. We
            will not be liable to you or any third party for any modification,
            price change, suspension, or discontinuance of the Site.
          </p>
          <p id='48396656-cbb5-4d5a-8310-c9c88169d529' className={classes.p}>
            We cannot guarantee the Site will be available at all times. We may
            experience hardware, software, or other problems or need to perform
            maintenance related to the Site, resulting in interruptions, delays,
            or errors. We reserve the right to change, revise, update, suspend,
            discontinue, or otherwise modify the Site at any time or for any
            reason without notice to you. You agree that we have no liability
            whatsoever for any loss, damage, or inconvenience caused by your
            inability to access or use the Site during any downtime or
            discontinuance of the Site. Nothing in these Terms of Use will be
            construed to obligate us to maintain and support the Site or to
            supply any corrections, updates, or releases in connection
            therewith.
          </p>
          <p id='3721a525-3536-4b0a-b83f-e3fee7de44af' className={classes.p}>
            <strong>GOVERNING LAW</strong>
          </p>
          <p id='7d741380-123d-45f7-838f-3d9bf73ce8db' className={classes.p}>
            These Terms shall be governed by and defined following the laws of
            the the State of Massachusetts. College ARCH and yourself
            irrevocably consent that the courts of Suffolk County, Massachusetts
            shall have exclusive jurisdiction to resolve any dispute which may
            arise in connection with these terms.
          </p>
          <p id='848220a9-0833-4514-89c4-65b4fcba5916' className={classes.p}>
            <strong>DISPUTE RESOLUTION</strong>
          </p>
          <p id='a3a89b51-445a-4b3a-87cd-3ad8bfe27f17' className={classes.p}>
            <strong>Binding Arbitration</strong>
          </p>
          <p id='fbdaf11f-b7a8-48cb-8e7e-d9a6115f4293' className={classes.p}>
            Any dispute arising out of or in connection with this contract,
            including any question regarding its existence, validity or
            termination, shall be referred to and finally resolved by Judicial
            Arbitrartion and Mediation Services, Inc. ("JAMS") according to the
            Rules of this ICAC, which, as a result of referring to it, is
            considered as the part of this clause. The number of arbitrators
            shall be one. The seat, or legal place, of arbitration shall be
            Suffolk County, Massachusetts. The language of the proceedings shall
            be English. The governing law of the contract shall be the
            substantive law of State of Massachusetts.
          </p>
          <p id='2be9fc68-f69f-4b94-997c-c38a86942777' className={classes.p}>
            <strong>Restrictions</strong>
          </p>
          <p id='baf2d3a9-7522-45dd-a7e9-c68329d557ed' className={classes.p}>
            The Parties agree that any arbitration shall be limited to the
            Dispute between the Parties individually. To the full extent
            permitted by law, (a) no arbitration shall be joined with any other
            proceeding; (b) there is no right or authority for any Dispute to be
            arbitrated on a class-action basis or to utilize class action
            procedures; and (c) there is no right or authority for any Dispute
            to be brought in a purported representative capacity on behalf of
            the general public or any other persons.
          </p>
          <p id='bb1d9be6-98dd-4562-8e4c-9fb9b1cf849c' className={classes.p}>
            <strong>Exceptions to Arbitration</strong>
          </p>
          <p id='f564df66-10e0-440c-87ee-b30f3b507217' className={classes.p}>
            The Parties agree that the following Disputes are not subject to the
            above provisions concerning binding arbitration: (a) any Disputes
            seeking to enforce or protect, or concerning the validity of, any of
            the intellectual property rights of a Party; (b) any Dispute related
            to, or arising from, allegations of theft, piracy, invasion of
            privacy, or unauthorized use; and (c) any claim for injunctive
            relief. If this provision is found to be illegal or unenforceable,
            then neither Party will elect to arbitrate any Dispute falling
            within that portion of this provision found to be illegal or
            unenforceable and such Dispute shall be decided by a court of
            competent jurisdiction within the courts listed for jurisdiction
            above, and the Parties agree to submit to the personal jurisdiction
            of that court.
          </p>
          <p id='ad6f899a-3d8f-42f6-aa73-d4332e286499' className={classes.p}>
            <strong>CORRECTIONS</strong>
          </p>
          <p id='df173f81-a5cf-451b-afb5-4e25c12cd719' className={classes.p}>
            There may be information on the Site that contains typographical
            errors, inaccuracies, or omissions, including descriptions, pricing,
            availability, and various other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or
            update the information on the Site at any time, without prior
            notice.
          </p>
          <p id='5bde7ded-a055-4897-987b-db7365f054cf' className={classes.p}>
            <strong>DISCLAIMER</strong>
          </p>
          <p id='7da5b14f-b243-4297-8c61-185c581a8904' className={classes.p}>
            THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
            THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE
            RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
            WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR
            USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES
            OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
            ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY
            WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR
            RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
            CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF
            ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
            SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS
            AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
            STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO
            OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE
            WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY,
            AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR
            FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE
            OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA
            THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
            RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A
            THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY
            WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER
            ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
            RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
            THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE
            OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT,
            YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE
            APPROPRIATE.
          </p>
          <p id='e2caf34a-6d7d-42a4-b54f-efe98b1c0b88' className={classes.p}>
            <strong>LIMITATIONS OF LIABILITY</strong>
          </p>
          <p id='0e6eaf5c-d0ac-4504-9861-46338f694666' className={classes.p}>
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
            TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
            EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
            PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
            YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE
            CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE
            WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL
            TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO
            US OR $100. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT
            ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR
            LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR
            ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU,
            AND YOU MAY HAVE ADDITIONAL RIGHTS.
          </p>
          <p id='3e20c2c3-3978-4517-9f66-a1f6a5a84fc2' className={classes.p}>
            <strong>INDEMNIFICATION</strong>
          </p>
          <p id='3e2a1fb5-d09d-4e27-a12d-06e11253c436' className={classes.p}>
            You agree to defend, indemnify, and hold us harmless, including our
            subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys’ fees
            and expenses, made by any third party due to or arising out of: (1)
            use of the Site; (2) breach of these Terms of Use; (3) any breach of
            your representations and warranties set forth in these Terms of Use;
            (4) your violation of the rights of a third party, including but not
            limited to intellectual property rights; or (5) any overt harmful
            act toward any other user of the Site with whom you connected via
            the Site. Notwithstanding the foregoing, we reserve the right, at
            your expense, to assume the exclusive defense and control of any
            matter for which you are required to indemnify us, and you agree to
            cooperate, at your expense, with our defense of such claims. We will
            use reasonable efforts to notify you of any such claim, action, or
            proceeding which is subject to this indemnification upon becoming
            aware of it.
          </p>
          <p id='0e0bb81f-0dab-4fce-8f90-153583039825' className={classes.p}>
            <strong>USER DATA</strong>
          </p>
          <p id='7be1b8e5-806a-4f36-b24b-f72860ba8b5f' className={classes.p}>
            We will maintain certain data that you transmit to the Site for the
            purpose of managing the performance of the Site, as well as data
            relating to your use of the Site. Although we perform regular
            routine backups of data, you are solely responsible for all data
            that you transmit or that relates to any activity you have
            undertaken using the Site. You agree that we shall have no liability
            to you for any loss or corruption of any such data, and you hereby
            waive any right of action against us arising from any such loss or
            corruption of such data.
          </p>
          <p id='700ef2b3-88d8-4c8b-9c9d-44f5862e793a' className={classes.p}>
            <strong>
              ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </strong>
          </p>
          <p id='4cd575bb-e2d1-45f6-996d-33e3d870c5a0' className={classes.p}>
            Visiting the Site, sending us emails, and completing online forms
            constitute electronic communications. You consent to receive
            electronic communications, and you agree that all agreements,
            notices, disclosures, and other communications we provide to you
            electronically, via email and on the Site, satisfy any legal
            requirement that such communication be in writing. YOU HEREBY AGREE
            TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
            RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
            RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
            SITE. You hereby waive any rights or requirements under any
            statutes, regulations, rules, ordinances, or other laws in any
            jurisdiction which require an original signature or delivery or
            retention of non-electronic records, or to payments or the granting
            of credits by any means other than electronic means.
          </p>
          <p id='f51ebc7e-c1e2-4354-97de-e932113b1b0c' className={classes.p}>
            <strong>MISCELLANEOUS</strong>
          </p>
          <p id='3e790de1-b728-4459-be92-eca8409f5cfc' className={classes.p}>
            These Terms of Use and any policies or operating rules posted by us
            on the Site or in respect to the Site constitute the entire
            agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Terms of Use
            shall not operate as a waiver of such right or provision. These
            Terms of Use operate to the fullest extent permissible by law. We
            may assign any or all of our rights and obligations to others at any
            time. We shall not be responsible or liable for any loss, damage,
            delay, or failure to act caused by any cause beyond our reasonable
            control. If any provision or part of a provision of these Terms of
            Use is determined to be unlawful, void, or unenforceable, that
            provision or part of the provision is deemed severable from these
            Terms of Use and does not affect the validity and enforceability of
            any remaining provisions. There is no joint venture, partnership,
            employment or agency relationship created between you and us as a
            result of these Terms of Use or use of the Site. You agree that
            these Terms of Use will not be construed against us by virtue of
            having drafted them. You hereby waive any and all defenses you may
            have based on the electronic form of these Terms of Use and the lack
            of signing by the parties hereto to execute these Terms of Use.
          </p>
          <p id='9bee2645-db78-487b-b6a6-961b7e58de76' className={classes.p}>
            <strong>CONTACT US</strong>
          </p>
          <p id='164759c5-12e1-4276-b047-936d7d09f8c4' className={classes.p}>
            In order to resolve a complaint regarding the Site or to receive
            further information regarding use of the Site, please contact us at
{' '}
            <Link href='mailto:contact.collegearch@gmail.com'>
              contact.collegearch@gmail.com
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

const page = withStyles(styles)(TermsContent);

export default page;
