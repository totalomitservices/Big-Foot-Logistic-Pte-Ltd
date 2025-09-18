
'use client'

export default function FooterMap() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.287879482597!2d-122.421728323497!3d37.78328227197178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858099b2446733%3A0x4f67a213a77d540e!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1700000000000"
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
