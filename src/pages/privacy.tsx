import clsx from "clsx";
import { Layout, TitlePage } from "@/components";
import { InternalLinksIds, internalLinks } from "@/models";

const colorPrimary = "bg-teal-950";
const colorSecondary = "bg-teal-800";

const pageId = InternalLinksIds.privacyPolicy;
const pageData = internalLinks[pageId];

const PrivacyPolicy = () => {
  return (
    <Layout
      title={pageData.text}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
    >
      <main className={clsx(colorPrimary)}>
        <TitlePage
          emoji={pageData.emoji}
          text={pageData.text}
          color={colorSecondary}
        />
        <div className="mx-custom flex flex-col items-center py-individual-page">
          <div className="text-body [&>section>h2]:text-h3 [&>section>h3]:text-h5 [&>section>h4]:text-h6 max-w-home [&>section>h2]:mb-6 sm:[&>section>h2]:mb-8 [&>section>h3]:mb-4 [&>section>h3]:mt-6 [&>section>h4]:mb-2 [&>section>p]:mb-4 [&>section>ul>li]:mb-2 [&>section>ul>li]:list-disc [&>section>ul]:mb-6 [&>section>ul]:list-inside [&>section]:mb-12 sm:[&>section]:mb-20">
            <section>
              <h2>Data protection at a glance</h2>
              <h3>General information</h3>
              <p>
                The following information provides a simple overview of what
                happens to your personal data when you visit this website.
                happens when you visit this website. Personal data is all data
                with which you can be can be personally identified. Detailed
                information on the subject of data protection can be found our
                privacy policy listed below this text.
              </p>
              <h3>Data collection on this website</h3>
              <h4>Who is responsible for data collection on this website?</h4>
              <p>
                Data processing on this website is carried out by the website
                operator. Their contact details can be found in the section
                &quot;Information on the controller&quot; in this privacy
                policy.
              </p>
              <h4>How do we collect your data?</h4>
              <p>
                On the one hand, your data is collected when you provide it to
                us. This may be, for example data that you enter in a contact
                form.
              </p>
              <p>
                Other data is collected automatically or with your consent by
                our IT systems when you visit the website. This is primarily
                technical data (e.g. internet browser, operating system or time
                of page view). of the page view). This data is collected
                automatically as soon as you enter this website.
              </p>
              <h4>What do we use your data for?</h4>
              <p>
                Some of the data is collected to ensure that the website is
                provided without errors. Other Data may be used to analyse your
                user behaviour.
              </p>
              <h4>What rights do you have regarding your data?</h4>
              <p>
                You have the right to receive information free of charge at any
                time about the origin, recipient and purpose of your stored
                personal data. You also have the right to request the
                rectification or deletion of this data. If you have given your
                consent to data processing, you can revoke this consent at any
                time for the future. You also have the right, under certain
                circumstances to request the restriction of the processing of
                your personal data under certain circumstances. You also have
                the right to lodge a complaint with the competent supervisory
                authority. You can contact us at any time if you have any
                further questions on the subject of data protection.
              </p>
              <h3>Analysis tools and tools from third-party providers</h3>
              <p>
                When you visit this website, your surfing behaviour may be
                statistically analysed. This is mainly done mainly with
                so-called analysis programmes. Detailed information on these
                analysis programmes can be found in the following privacy
                policy.
              </p>
            </section>
            <section>
              <h2>Hosting</h2>
              <h3>External hosting</h3>
              <p>
                This website is hosted externally. The personal data that is
                collected on this website are stored on the servers of the
                hoster(s). This may primarily involve IP addresses, contact
                requests, meta and communication data, contract data, contact
                details, names, website accesses and other data and other data
                generated via a website.
              </p>
              <p>
                External hosting is carried out for the purpose of fulfilling
                the contract with our potential and existing potential and
                existing customers (Art. 6 para. 1 lit. b GDPR) and in the
                interest of a secure, fast and efficient provision of our online
                offer by a professional provider (Art. 6 para. 1 lit. f GDPR).
                If a corresponding consent has been requested, the processing
                takes place exclusively on the basis of on the basis of Art. 6
                para. 1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as the
                consent authorises the storage of cookies or access to
                information in the user&apos;s end device (e.g. device
                fingerprinting) within the meaning of the within the meaning of
                the TTDSG. Consent can be revoked at any time.
              </p>
              <p>
                Our hoster(s) will only process your data to the extent that
                this is necessary for the fulfilment of its fulfil its
                performance obligations and follow our instructions with regard
                to this data. We use the following host(s):
              </p>
              <ul>
                <li>Vercel</li>
              </ul>
            </section>
            <section>
              <h2>General notes and mandatory information</h2>
              <h3>Data protection</h3>
              <p>
                The operators of these pages take the protection of your
                personal data very seriously. We treat your personal data
                confidentially and in accordance with the statutory data
                protection regulations and this privacy policy.
              </p>
              <p>
                When you use this website, various personal data is collected.
                Personal data is data that can be used to identify you
                personally. This privacy policy explains what data we collect
                and what we use it for. It also explains how and for what
                purpose this is done.
              </p>
              <p>
                We would like to point out that data transmission over the
                Internet (e.g. when communicating by email) can have security
                gaps. Complete protection of data against access by third
                parties is not possible.
              </p>
              <h3>Note on the responsible body</h3>
              <p>
                The controller responsible for data processing on this website
                is:
                <br />
                <br />
                Ludivine Constanti
                <br />
                <br />
                E-mail: ludivine-constanti@outlook.com
                <br />
                <br />
                The controller is the natural or legal person who alone or
                jointly with others determines the purposes and means of the the
                purposes and means of the processing of personal data (e.g.
                names, e-mail addresses, etc.). decides.
              </p>
              <h3>Storage period</h3>
              <p>
                Unless a more specific storage period has been specified in this
                privacy policy, your personal data will remain your personal
                data will remain with us until the purpose for data processing
                no longer applies. If you make a legitimate request for erasure
                or withdraw your consent to data processing, your data will be
                erased unless we have other legally permissible reasons for
                storing your personal data (e.g. personal data (e.g. retention
                periods under tax or commercial law); in the latter the latter
                case, the deletion will take place after these reasons no longer
                apply.
              </p>
              <h3>
                General information on the legal basis of data processing on
                this website website
              </h3>
              <p>
                If you have consented to data processing, we process your
                personal data on the basis of basis of Art. 6 para. 1 lit. a
                GDPR or Art. 9 para. 2 lit. a GDPR, insofar as special
                categories of data are processed are processed in accordance
                with Art. 9 para. 1 GDPR. In the event of express consent to the
                transfer of personal data to of personal data to third
                countries, the data processing is also carried out on the basis
                of Art. 49 para. 1 lit. a GDPR. If you have consented to the
                storage of cookies or access to information in your end device
                (e.g. via device fingerprinting), the data processing is also
                carried out on the basis of on the basis of § 25 para. 1 TTDSG.
                Consent can be revoked at any time. If your data is required for
                fulfilment of the contract or for the implementation of
                pre-contractual measures, we process your data on the basis of
                data on the basis of Art. 6 para. 1 lit. b GDPR. Furthermore, we
                process your data if it is necessary for the fulfilment of a
                legal obligation on the basis of Art. 6 para. 1 lit. c GDPR.
                Data processing may also be based on our legitimate interest in
                accordance with Art. 6 para. 1 lit. f GDPR. The relevant legal
                bases in each individual case are explained in the following
                paragraphs of this privacy policy.
              </p>
              <h3>Recipients of personal data</h3>
              <p>
                As part of our business activities, we work together with
                various external organisations. This sometimes requires the
                transfer of personal data to these external bodies. We only pass
                on personal data to external bodies if this is necessary as part
                of the fulfilment of a contract fulfilment of a contract, if we
                are legally obliged to do so (e.g. transfer of data to tax
                authorities) to tax authorities), if we have a legitimate
                interest in the transfer in accordance with Art. 6 para. 1 lit.
                f GDPR or if another legal basis permits the transfer of data.
                When using processors, we only pass on our customers&apos;
                personal data on the basis of a valid contract on order
                processing. In the case of joint processing, a joint processing
                contract is concluded. joint processing is concluded.
              </p>
              <h3>Revocation of your consent to data processing</h3>
              <p>
                Many data processing operations are only possible with your
                express consent. You can already given consent at any time. The
                legality of the data processing carried out until the revocation
                processing remains unaffected by the revocation.
              </p>
              <h3>
                Right to object to the collection of data in special cases and
                to direct advertising (Art. 21 GDPR)
              </h3>
              <p>
                IF THE DATA PROCESSING IS BASED ON ART. 6 ABS. 1 LIT. E OR F
                GDPR YOU HAVE THE RIGHT TO OBJECT AT ANY TIME, ON GROUNDS
                RELATING TO YOUR PARTICULAR SITUATION, TO OBJECT TO THE
                PROCESSING OF YOUR PERSONAL DATA; THIS ALSO APPLIES DATA; THIS
                ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. PROFILING.
                THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED, CAN BE
                FOUND IN THIS PRIVACY POLICY. IF YOU LODGE AN OBJECTION, WE WILL
                NO LONGER PROCESS YOUR PERSONAL DATA CONCERNED UNLESS WE CAN
                DEMONSTRATE COMPELLING UNLESS WE CAN DEMONSTRATE COMPELLING
                LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE THAT
                OUTWEIGH YOUR INTERESTS, RIGHTS AND FREEDOMS, OR THE PROCESSING
                SERVES TO PROCESSING SERVES THE ASSERTION, EXERCISE OR DEFENCE
                OF LEGAL CLAIMS LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21
                PARA. 1 GDPR).
              </p>
              <p>
                IF YOUR PERSONAL DATA IS PROCESSED FOR THE PURPOSE OF DIRECT
                MARKETING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE
                PROCESSING OF PERSONAL DATA PERSONAL DATA CONCERNING YOU FOR THE
                PURPOSE OF SUCH ADVERTISING ADVERTISING; THIS ALSO APPLIES TO
                PROFILING TO THE EXTENT THAT IT IS RELATED TO SUCH DIRECT
                CONNECTION WITH SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR
                PERSONAL DATA WILL SUBSEQUENTLY SUBSEQUENTLY NO LONGER USED FOR
                THE PURPOSE OF DIRECT MARKETING (OBJECTION IN ACCORDANCE WITH
                ART. 21 ABS. 2 GDPR).
              </p>
              <h3>
                Right to lodge a complaint with the competent supervisory
                authority
              </h3>
              <p>
                In the event of violations of the GDPR, data subjects have the
                right to lodge a complaint with a supervisory authority, in
                particular in the Member State of their habitual residence,
                place of work or the place of the alleged infringement. The
                right to lodge a complaint is without prejudice to other
                administrative or judicial remedies.
              </p>
              <h3>Right to data portability</h3>
              <p>
                You have the right to have data which we process automatically
                on the basis of your consent or in fulfilment of a contract
                automatically to yourself or to a third party in a commonly
                used, machine-readable format. machine-readable format. If you
                request the direct transfer of the data to another data
                controller controller, this will only take place if it is
                technically feasible.
              </p>
              <h3>Information, rectification and erasure</h3>
              <p>
                Within the framework of the applicable legal provisions, you
                have the right at any time to free information about your stored
                personal data, its origin and recipients and the purpose of data
                purpose of the data processing and, if applicable, a right to
                rectification or erasure of this data. For this and You can
                contact us at any time if you have further questions on the
                subject of personal data.
              </p>
              <h3>Right to restriction of processing</h3>
              <p>
                You have the right to request the restriction of the processing
                of your personal data. You can contact us at any time to do
                this. The right to restriction of processing exists in the
                following cases:
              </p>
              <ul>
                <li>
                  If you dispute the accuracy of your personal data stored by
                  us, we require time to check this. For the duration of the
                  verification, you have the right to request the restriction of
                  the processing of your personal data.
                </li>
                <li>
                  If the processing of your personal data has occurred/is
                  occurring unlawfully, you can request the restriction of data
                  processing instead of erasure.
                </li>
                <li>
                  If we no longer need your personal data, but you need it for
                  the exercise, defence or defence or assertion of legal claims,
                  you have the right to request the restriction of the
                  processing of your request the restriction of the processing
                  of your personal data instead of erasure.
                </li>
                <li>
                  If you have lodged an objection in accordance with Art. 21
                  para. 1 GDPR, a balance must be struck between your interests
                  and our interests. As long as it is not yet clear whose
                  interests interests prevail, you have the right to request the
                  restriction of the processing of your personal data.
                  processing of your personal data.
                </li>
              </ul>
              <p>
                If you have restricted the processing of your personal data,
                this data - apart from its apart from its storage - only with
                your consent or for the establishment, exercise or defence of
                legal defence of legal claims or for the protection of the
                rights of another natural or legal person legal person or for
                reasons of important public interest of the European Union or of
                a Member State. of a Member State.
              </p>
            </section>
            <section>
              <h2>Data collection on this website</h2>
              <h3>Enquiry by e-mail</h3>
              <p>
                If you contact us by e-mail, your enquiry, including all
                personal data (name, enquiry) personal data (name, enquiry) for
                the purpose of processing your request. stored and processed by
                us. We will not pass on this data without your consent.
              </p>
              <p>
                This data is processed on the basis of Art. 6 para. 1 lit. b
                GDPR, provided that your enquiry is related to related to the
                fulfilment of a contract or for the implementation of
                pre-contractual measures is required. In all other cases, the
                processing is based on our legitimate interest in the effective
                effective processing of the enquiries addressed to us (Art. 6
                para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a
                GDPR) if this has been requested; consent can be revoked at any
                time. revocable at any time.
              </p>
              <p>
                The data you send to us via contact enquiries will remain with
                us until you ask us to delete it, revoke your request deletion,
                revoke your consent to storage or the purpose for data storage
                no longer applies (e.g. after your request has been processed).
                Mandatory statutory provisions - in particular in particular
                statutory retention periods - remain unaffected.
              </p>
            </section>
            <section>
              <h2>Plugins and tools</h2>
              <h3>Google Fonts (local hosting)</h3>
              <p>
                This site uses so-called Google Fonts, which are provided by
                Google, for the standardised display of fonts. are provided by
                Google. Google Fonts are installed locally. There is no
                connection to Google servers. does not take place.
              </p>
              <p>
                You can find more information about Google Fonts at
                https://developers.google.com/fonts/faq and in Google&apos;s
                privacy policy: https://policies.google.com/privacy?hl=de.
              </p>
            </section>
            <p>Source: https://www.e-recht24.de</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default PrivacyPolicy;
