import Image from 'next/image';
import { Section } from '@/section/Section';

const Sponsors = () => (
    <Section
      title="Galery"
      description="Our sponsors' exceptional support has made this project possible."
    >
      <table className="mx-auto border-collapse py-10">
        <tbody>
          <tr className="h-56">
            <td className="border-2 border-gray-300">
              <a
                href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
                target="_blank"
              >
                <Image
                  src="https://carmudi-journal.icarcdn.com/carmudi-id/wp-content/uploads/2019/04/01143602/maxresdefault.jpg"
                  alt="Sentry"
                  width={260}
                  height={284}
                />
              </a>
            </td>
            <td className="border-2 border-gray-300">
              <a
                href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
                target="_blank"
              >
                <Image
                  src="https://carmudi-journal.icarcdn.com/carmudi-id/wp-content/uploads/2019/04/01143651/1478183613-e30-two-door-wagon.jpg"
                  alt="Better Stack"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="border-2 border-gray-300">
              <a href="https://nextlessjs.com">
                <Image
                  src="https://carmudi-journal.icarcdn.com/carmudi-id/wp-content/uploads/2019/04/01143730/BMW-M3-GT-E36-17.jpg"
                  alt="React SaaS Boilerplate Next.js"
                  width={260}
                  height={224}
                />
              </a>
            </td>
          </tr>
          <tr className="h-56">
            <td className="border-2 border-gray-300">
              <a
                href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate"
                target="_blank"
              >
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="Clerk – Authentication & User Management for Next.js"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="border-2 border-gray-300" colSpan={1.5}>
              <a
                href="https://turso.tech/?utm_source=nextjsstarterbp"
                target="_blank"
              >
                <Image
                  src="https://carmudi-journal.icarcdn.com/carmudi-id/wp-content/uploads/2019/04/01143823/BMW-2002-Car-Full-Size-PNG-1600x1067.png"
                  alt="SQLite Developer Experience"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="border-2 border-gray-300">
              <a href="https://l.crowdin.com/next-js" target="_blank">
                <Image
                  src="https://carmudi-journal.icarcdn.com/carmudi-id/wp-content/uploads/2019/04/01143903/maxresdefault-1.jpg"
                  alt="Crowdin"
                  width={260}
                  height={224}
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
);

export { Sponsors };
