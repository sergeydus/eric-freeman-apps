export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950 sm:px-10">
      <main className="mx-auto w-full max-w-3xl rounded-3xl bg-white px-6 py-10 shadow-sm ring-1 ring-zinc-100 sm:px-10 sm:py-12">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Privacy Policy
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl">
            Auto Reply Assistant
          </h1>
          <p className="text-sm text-zinc-500">Last updated: February 13, 2026</p>
          <p className="text-base leading-7 text-zinc-600">
            Auto Reply Assistant ("the App") is developed by Eric Freeman Apps
            ("we", "us", or "our"). This Privacy Policy explains how the App
            handles user data.
          </p>
        </header>

        <section className="mt-10 space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">
              1. Information We Collect
            </h2>
            <p className="text-base leading-7 text-zinc-600">
              The App does not collect, store, or transmit any personal data to
              us or to any external servers. All data used by the App stays on
              your device only. However, to function properly, the App requires
              access to certain device permissions:
            </p>
            <div className="space-y-4 text-base leading-7 text-zinc-600">
              <div>
                <p className="font-semibold text-zinc-800">Call Log Access</p>
                <p>
                  Used only to detect missed calls so the App can send an
                  automatic SMS reply. The App does not upload, share, or store
                  call logs externally.
                </p>
              </div>
              <div>
                <p className="font-semibold text-zinc-800">Phone State Access</p>
                <p>
                  Used to determine when a call is missed. No data is
                  transmitted or stored outside your device.
                </p>
              </div>
              <div>
                <p className="font-semibold text-zinc-800">
                  SMS Sending Permission
                </p>
                <p>
                  Used only to send your predefined auto-reply message. The App
                  does not read your SMS messages.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">
              2. How We Use Information
            </h2>
            <p className="text-base leading-7 text-zinc-600">
              All information accessed by the App is used solely for the
              following purposes:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-zinc-600">
              <li>Detecting missed calls</li>
              <li>Sending your predefined SMS auto-reply</li>
              <li>Displaying status information inside the App</li>
            </ul>
            <p className="text-base leading-7 text-zinc-600">
              We do not collect analytics, do not track users, and do not share
              any information with third parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">
              3. Data Storage
            </h2>
            <p className="text-base leading-7 text-zinc-600">
              All data (such as your auto-reply message) is stored locally on
              your device. We do not have access to it.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">
              4. Third-Party Sharing
            </h2>
            <p className="text-base leading-7 text-zinc-600">
              We do not share any information with third parties. We do not use
              advertising networks, analytics tools, or external servers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">
              5. Children&#39;s Privacy
            </h2>
            <p className="text-base leading-7 text-zinc-600">
              The App is not directed toward children under 13. We do not
              knowingly collect any personal information from children.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">6. Security</h2>
            <p className="text-base leading-7 text-zinc-600">
              Because the App does not transmit or store data externally, your
              information remains on your device. We recommend keeping your
              device secure with a passcode or biometric lock.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">
              7. Changes to This Policy
            </h2>
            <p className="text-base leading-7 text-zinc-600">
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated "Last updated"
              date.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">8. Contact Us</h2>
            <p className="text-base leading-7 text-zinc-600">
              If you have questions about this Privacy Policy, you can contact
              us at:
            </p>
            <p className="text-base font-semibold text-zinc-800">
              ericfreemanapps@gmail.com
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
