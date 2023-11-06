import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@documenso/ui/primitives/accordion';

import { PricingTable } from '~/components/(marketing)/pricing-table';

export type PricingPageProps = {
  searchParams?: {
    planId?: string;
    email?: string;
    name?: string;
    cancelled?: string;
  };
};

export default function PricingPage() {
  return (
    <div className="mt-6 sm:mt-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold lg:text-5xl">Pricing</h1>

        <p className="text-foreground mt-4 text-lg leading-normal">
          Designed for every stage of your journey.
        </p>
        <p className="text-foreground text-lg leading-normal">Get started today.</p>
      </div>

      <div className="mt-12">
        <PricingTable />
      </div>

      <div className="mx-auto mt-36 max-w-2xl">
        {/* FAQ Section */}

        <h2 className="text-4xl font-semibold">FAQs</h2>

        <Accordion type="multiple" className="mt-8">
          <AccordionItem value="plan-differences">
            <AccordionTrigger className="text-left text-lg font-semibold">
              What is the difference between the plans?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              You can self-host Documenso for free or use our ready-to-use hosted version. The
              hosted version comes with additional support, painless scalability and more. Early
              adopters will get access to all features we build this year, for no additional cost!
              Forever! Yes, that includes multiple users per account later. If you want Documenso
              for your enterprise, we are happy to talk about your needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="data-handling">
            <AccordionTrigger className="text-left text-lg font-semibold">
              How do you handle my data?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              Securely. Our data centers are located in Frankfurt (Germany), giving us the best
              local privacy laws. We are very aware of the sensitive nature of our data and follow
              best practices to ensure the security and integrity of the data entrusted to us.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="should-use-cloud">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Why should I use your hosting service?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              Using our hosted version is the easiest way to get started, you can simply subscribe
              and start signing your documents. We take care of the infrastructure, so you can focus
              on your business. Additionally, when using our hosted version you benefit from our
              trusted signing certificates which helps you to build trust with your customers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-to-contribute">
            <AccordionTrigger className="text-left text-lg font-semibold">
              How can I contribute?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              That's awesome. You can take a look at the current{' '}
              <Link
                className="text-documenso-700 font-bold"
                href="https://github.com/documenso/documenso/milestones"
                target="_blank"
              >
                Issues
              </Link>{' '}
              and join our{' '}
              <Link
                className="text-documenso-700 font-bold"
                href="https://join.slack.com/t/documenso/shared_invite/zt-1vibm8txi-DqsDFtdp44Hn2H5lc~RpPQ"
                target="_blank"
              >
                Slack Community
              </Link>{' '}
              to keep up to date, on what the current priorities are. In any case, we are an open
              community and welcome all input, technical and non-technical ❤️
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="can-i-use-documenso-commercially">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Can I use Documenso commercially?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              Yes! Documenso is offered under the GNU AGPL V3 open source license. This means you
              can use it for free and even modify it to fit your needs, as long as you publish your
              changes under the same license.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why-prefer-documenso">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Why should I prefer Documenso over DocuSign or some other signing tool?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              Documenso is a community effort to create an open and vibrant ecosystem around a tool,
              everybody is free to use and adapt. By being truly open we want to create trusted
              infrastructure for the future of the internet.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="where-can-i-get-support">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Where can I get support?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              We are happy to assist you at{' '}
              <Link
                className="text-documenso-700 font-bold"
                target="_blank"
                href="mailto:support@documenso.com"
              >
                support@documenso.com
              </Link>{' '}
              or{' '}
              <a
                className="text-documenso-700 font-bold"
                href="https://join.slack.com/t/documenso/shared_invite/zt-1vibm8txi-DqsDFtdp44Hn2H5lc~RpPQ"
                target="_blank"
              >
                in our Slack-Support-Channel
              </a>{' '}
              please message either Lucas or Timur to get added to the channel if you are not
              already a member.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
