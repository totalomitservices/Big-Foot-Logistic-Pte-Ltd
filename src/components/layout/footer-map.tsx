
'use client'

export default function FooterMap() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.775833486355!2d103.7037006759165!3d1.309531861536761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0f8e02b7917d%3A0x10d107175207c37a!2s8%20Joo%20Koon%20Rd%2C%20Singapore%20628972!5e0!3m2!1sen!2ssg!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of our location"
        ></iframe>
    )
}
