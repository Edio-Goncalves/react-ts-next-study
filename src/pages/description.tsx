import Footer from "./components/Footer";
import Header from "./components/Header";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Description() {
  const router = useRouter();
  const { title, description } = router.query;

  return (
    <div className="wrapper">
      <Header />
      <div className="description">
        <div className="title-wrapper">
          <span onClick={() => router.back()}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
          <h1> {title}</h1>
        </div>
        <div className="description-page">
          <p>{description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
