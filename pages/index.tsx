import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Main} from "../components/Main";
import {ProductDetails} from "../components/ProductDetails";

const DATA = {
  id: 1,
  title: 'Pies',
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias corporis incidunt ipsam labore, magni quos unde. A, adipisci alias, consequatur distinctio facilis modi nisi nulla, officiis quidem quo quos sint unde ut vitae voluptatum. Accusamus aspernatur facilis maxime recusandae repellendus. Ex itaque qui quibusdam repellat! Dolorem eius illum recusandae voluptatibus.`,
  thumbnailUrl: `https://picsum.photos/id/237/536/354`,
  thumbnailAlt: `Czarny pies patrzy na ciebie`,
  rating: 4.5,
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <ProductDetails data={DATA}/>
      </Main>
      <Footer />
    </div>
  )
}