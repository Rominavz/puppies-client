import notFound from '../assets/notFound.jpg'
import { PageNotFound, LinkBack, Content } from "../styles/NotFound";
import { BackBtn } from '../styles/BackBtn';

  export default function NotFound() {
    return (
      <PageNotFound>
        <Content>
            <LinkBack to="/home">
              <BackBtn title="Regresar" />
            </LinkBack>
            <img src={notFound} alt="Page Not found" />
            <h2>Page Not found</h2>
        </Content>
      </PageNotFound>
    );
  }