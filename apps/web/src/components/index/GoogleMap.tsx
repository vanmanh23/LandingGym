
export default function GoogleMap() {
  return (
    <div className="w-3/4 m-auto flex justify-center ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61369.771413941475!2d108.25483060081788!3d15.981693156049005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421ba07eb49eed%3A0x696cfac8d4d75247!2zTmfDoyBiYSBM4bqndSBT4bulcA!5e0!3m2!1sen!2s!4v1712718065892!5m2!1sen!2s"
        width="600"
        className="w-full"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
