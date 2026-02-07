<template>
  <div class="terms-page">
    <Navigation />

    <main class="main-content">
      <div class="container">
        <div class="terms-content">
          <h1 class="page-title">Terms of Service</h1>
          <p class="last-updated">Last Updated: January 2026</p>

          <section class="policy-section">
            <h2>Agreement to Terms</h2>
            <p>
              EcoFresh Dry Cleaner ("we," "our," or "us") provides this website and mobile application
              (the "Service"). By accessing or using the Service, you agree to be bound by these Terms
              of Service. If you do not agree, do not use the Service.
            </p>
          </section>

          <section class="policy-section">
            <h2>SMS Program Terms and Conditions</h2>
            <p>
              When you opt in to receive text messages from us, the following terms apply. This page is the
              <strong>direct link to our terms and conditions</strong> for the SMS program and includes the
              program name, description, message and data rates, message frequency, support contact information,
              and opt-out instructions (including <strong>HELP</strong> and <strong>STOP</strong>) as required
              by industry standards for messaging in the United States.
            </p>

            <h3>Program Name</h3>
            <p><strong>EcoFresh Dry Cleaner SMS Notifications</strong></p>

            <h3>Program Description</h3>
            <p>
              EcoFresh Dry Cleaner Order Notifications is an optional SMS program that sends you
              order-related updates via text message. Messages may include order confirmation when you
              place an order, status updates (e.g., picked up, cleaning, out for delivery), and other
              transactional messages about your dry cleaning orders. This program is only active if you
              have opted in through the EcoFresh mobile app notification settings.
            </p>

            <h3>Message and Data Rates</h3>
            <p>
              <strong>Message and data rates may apply.</strong> Your mobile carrier may charge you
              for each SMS message you send or receive, according to your plan. We do not charge a fee
              for the messages we send, but your carrier's standard messaging and data rates apply.
              Check with your wireless provider for details.
            </p>

            <h3>Message Frequency</h3>
            <p>
              Message frequency varies. You will typically receive messages when you place an order
              (e.g., "Your order #XXXXXX has been received") and when your order status changes (e.g.,
              picked up, cleaning, ready for delivery, delivered). We do not send marketing or
              promotional text messages unless you have separately opted in to those. Most users
              receive a few messages per order.
            </p>

            <h3>Support Contact Information</h3>
            <p>For help with the SMS program or your account, contact us:</p>
            <div class="contact-details">
              <p><strong>Email:</strong> <a href="mailto:hello@ecofreshdrycleaner.com">hello@ecofreshdrycleaner.com</a></p>
              <p><strong>Business Inquiries:</strong> <a href="mailto:hello@ecofriendlydrycleaner.com">hello@ecofriendlydrycleaner.com</a></p>
            </div>

            <h3>Opt-Out Instructions</h3>
            <p>You can opt out of SMS messages at any time:</p>
            <ul>
              <li>
                <strong>In the app:</strong> Open the EcoFresh app, go to Profile → Notification Settings,
                and turn off "SMS Notifications."
              </li>
              <li>
                <strong>By text:</strong> Reply <strong>STOP</strong> to any message you receive from us
                to unsubscribe. You will receive a final confirmation message. After that, you will no
                longer receive SMS from this program.
              </li>
              <li>
                <strong>For help:</strong> Reply <strong>HELP</strong> to any message to receive
                information and support contact details.
              </li>
            </ul>
            <p>
              After you opt out, you may receive one final confirmation message. For more details on
              industry standards for SMS programs, see
              <a href="https://help.twilio.com/articles/223134847-Industry-standards-for-US-Short-Code-Terms-of-Service" target="_blank" rel="noopener noreferrer">Twilio's guidance on U.S. Short Code Terms of Service</a>.
            </p>
          </section>

          <section class="policy-section">
            <h2>Use of the Service</h2>
            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You may not use the Service to harm others, violate any law, or interfere with the operation of the Service.</p>
          </section>

          <section class="policy-section">
            <h2>Orders and Payment</h2>
            <p>
              Orders placed through the Service are subject to availability and our acceptance. Prices
              and terms are as displayed at the time of order. Payment is processed by third-party
              providers; we do not store your full payment credentials.
            </p>
          </section>

          <section class="policy-section">
            <h2>Intellectual Property</h2>
            <p>
              The Service and its content (including text, graphics, logos, and software) are owned by
              EcoFresh Dry Cleaner or its licensors and are protected by copyright and other
              intellectual property laws. You may not copy, modify, or distribute our content without
              permission.
            </p>
          </section>

          <section class="policy-section">
            <h2>Disclaimer of Warranties</h2>
            <p>
              The Service is provided "as is" and "as available" without warranties of any kind, either
              express or implied. We do not warrant that the Service will be uninterrupted or error-free.
            </p>
          </section>

          <section class="policy-section">
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, EcoFresh Dry Cleaner and its affiliates shall not
              be liable for any indirect, incidental, special, consequential, or punitive damages arising
              from your use of the Service.
            </p>
          </section>

          <section class="policy-section">
            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will post the updated Terms on this page
              and update the "Last Updated" date. Your continued use of the Service after changes
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section class="policy-section">
            <h2>Contact Us</h2>
            <p>If you have questions about these Terms of Service or the SMS program, please contact us:</p>
            <div class="contact-details">
              <p><strong>Email:</strong> <a href="mailto:hello@ecofreshdrycleaner.com">hello@ecofreshdrycleaner.com</a></p>
              <p><strong>Business Inquiries:</strong> <a href="mailto:hello@ecofriendlydrycleaner.com">hello@ecofriendlydrycleaner.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.terms-page {
  min-height: 100vh;
  background: var(--bg-eco-lighter);
}

.main-content {
  padding-top: 70px;
  padding-bottom: 4rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.terms-content {
  background: var(--bg-primary);
  padding: 4rem 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px var(--shadow-light);
  border: 1px solid var(--border-eco);
  position: relative;
  overflow: hidden;
}

.terms-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: var(--gradient-eco);
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.last-updated {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 3rem;
  font-style: italic;
}

.policy-section {
  margin-bottom: 3rem;
}

.policy-section:last-child {
  margin-bottom: 0;
}

.policy-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--border-eco);
}

.policy-section h2:first-of-type {
  margin-top: 0;
}

.policy-section h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--eco-green);
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.policy-section p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.policy-section ul {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

.policy-section li {
  line-height: 1.8;
  margin-bottom: 0.5rem;
}

.policy-section a {
  color: var(--eco-green);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.policy-section a:hover {
  color: var(--eco-green-dark);
  text-decoration: underline;
}

.contact-details {
  background: var(--bg-eco-light);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-eco);
  margin-top: 1rem;
}

.contact-details p {
  margin-bottom: 0.75rem;
}

.contact-details strong {
  color: var(--text-primary);
  font-weight: 600;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .terms-content {
    padding: 3rem 2rem;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .policy-section h2 {
    font-size: 1.5rem;
  }

  .policy-section h3 {
    font-size: 1.2rem;
  }

  .policy-section p,
  .policy-section li {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .terms-content {
    padding: 2rem 1.5rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .policy-section h2 {
    font-size: 1.3rem;
  }

  .policy-section h3 {
    font-size: 1.1rem;
  }
}
</style>
