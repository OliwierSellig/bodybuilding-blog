import CourseFeatureItem from './CourseFeatureItem';
import styles from './CourseFeatures.module.scss';
import feature1 from '@/public/svg/test-1.svg';
import feature2 from '@/public/svg/test-2.svg';
import feature3 from '@/public/svg/test-3.svg';
import feature4 from '@/public/svg/test-4.svg';
import feature5 from '@/public/svg/test-5.svg';
import feature6 from '@/public/svg/test-6.svg';

const features = [
  {
    title: 'Różne poziomy zaawansowania',
    image: feature1,
    subtitle:
      'Prowadzę Cię za rękę - nauka dziergania ma być dla Ciebie czystą przyjemnością. Tworzę kursy tak, abyś krok po kroku wiedziała co robić bez stresu i zastanawiania się co dalej.',
  },
  {
    title: 'Wygodna forma',
    image: feature2,
    subtitle:
      'Moje kursy są całkowicie online, dzięki czemu opanujesz tajniki dziergania w zaciszu domowym o dowolnej porze dnia lub nocy. Przeznaczasz tyle czasu ile masz dostosowując naukę do swoich możliwości',
  },
  {
    title: 'Tutoriale video krok po kroku',
    image: feature3,
    subtitle:
      'Każdy kurs, oprócz instrukcji w formie PDF, zawiera także film instruktażowy krok po kroku. Dzięki temu możesz naśladować ruchy  i wiesz dokładnie, co robić. Nie musisz nic juz szukać bo wszystko zobaczysz dokładnie na filmikach.',
  },
  {
    title: 'Możliwość dokupienia pakietów materiałów do większości kursów',
    image: feature4,
    subtitle: 'Nie musisz tracić czasu na szukanie. Zamawiasz jedno pudełko i zaczynasz działać :)',
  },
  {
    title: 'Dostęp nieograniczony czasowo',
    image: feature5,
    subtitle:
      'Kupując u mnie kursy, nie musisz się stresować, ze nie zdążysz czegoś przerobić. Kurs kupujesz raz i masz dostęp do niego bezterminowo.',
  },
  {
    title: 'Fantastyczna społeczność',
    image: feature6,
    subtitle:
      'Masz możliwość dzielenia się efektami swoich kursów z innymi pasjonatkami dziergania na grupie Nauka Dziergania z Zrób Mi Mamo. Jest tam już ponad 6 tysięcy kobiet!',
  },
];

export default function CourseFeatures() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2>
          Co <strong>wyroznia</strong> moje kursy?
        </h2>
        <p>Sprawdź dlaczego zaufało mi tysiące kobiet</p>
      </header>
      <ul className={styles.list}>
        {features.map((feature, i) => (
          <CourseFeatureItem {...feature} key={i} />
        ))}
      </ul>
    </section>
  );
}
