import { IonContent, IonPage, IonText, IonCardContent, IonCard } from '@ionic/react';
import './Home.css';
import {Swiper, SwiperSlide} from 'swiper/react';

const Home: React.FC = () => {




  const data = [
  {
    username: "codyz"

  },
  {

    username: "ikeraff"

  },
  {

  username:"alexmakesjokes"

  }

  ]

  return (
    <IonPage>
      <IonContent>
	<Swiper spaceBetween={10} slidesPerView={2} resistanceRatio={0.85}>
	  {data.map((person, index) => {
	      return (
		  <SwiperSlide key={`localcomics_${ index}`}>
	  	      <IonCard>
			<IonCardContent>
			  <IonText>{person.username}</IonText>

			</IonCardContent>
		      </IonCard>
		  </SwiperSlide>
		    );
		  })}
	</Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
