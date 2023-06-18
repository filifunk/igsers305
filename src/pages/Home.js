import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButton, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Geolocation } from '@capacitor/geolocation';
import { useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

const Home: React.FC = () => {

  const [coords, setCoords] = useState({})
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("")

  const [loading7, setLoading7] = useState(true)
  const [localtop, setLocalTop] = useState([])
  const [localtop1, setLocalTop1] = useState([])
  const [localfavs, setLocalFavs] = useState([])


  const printCurrentPosition = async () => {
    try {
      const outside = await Geolocation.getCurrentPosition();
      setCoords(outside)
      setLat(outside.coords.latitude)
      setLong(outside.coords.longitude)
      setAccuracy(outside.coords.accuracy)
      setLoading(false)
    }catch(err) {
      console.log(err)
      setLoading(false)
      setMessage(String(err))
    }
    

  }



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
