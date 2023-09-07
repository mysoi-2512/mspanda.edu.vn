import Hero from './Hero';
import ClassImages from './ClassImages';
import Courses from './Courses';
import CustomerReviews from './CustomerReviews';
import Points from './Points';
import SuperQuality from './SuperQuality';
import Introduction from './Introduction';
import RegisterForm from '../components/RegisterForm';
  
const Home = () => (
    <main className="relative">
        <section className="">
            <Hero />
        </section>

        <section id="gioi-thieu" className="padding">
            <Introduction />
        </section>

        <section className="padding-x py-10">
            <Points />
        </section>

        <section id="khoa-hoc" className="padding">
            <Courses />
        </section>

        <section className="padding">
            <SuperQuality />
        </section>

        <section className="bg-pale-blue padding">
            <CustomerReviews />
        </section>

        <section id="lien-he" className="padding">
            <RegisterForm />
        </section>

        <section className="padding">
            <ClassImages />
        </section>

    </main>
)

export default Home;