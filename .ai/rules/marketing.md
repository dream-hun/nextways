---
paths:
  - app/Http/Controllers/ContactInquiryController.php|app/Http/Requests/StoreContactInquiryRequest.php|resources/js/pages/marketing/contact.tsx|routes/web.php
---

# Marketing

## Website inquiries use the Laravel mail boundary
Submit the public contact form through the Wayfinder-generated contact.store POST route. Keep validation in StoreContactInquiryRequest, deliver through ContactInquiryReceived to mail.contact_to, and preserve the honeypot plus route throttle.
