/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
// import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';
import icon1 from 'assets/images/features/location.svg';
import icon2 from 'assets/images/features/clean.svg';
import icon3 from 'assets/images/features/time.svg';
import icon4 from 'assets/images/features/security.svg';
const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Расположение',
    description: `Склад находится на красной линии на пр.Слобожанский. Удобный подъезд к контейнеру.`
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Освещение',
    description: `Внутри каждого контейнера мы предоставляем освещение для вашего комфорта.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Доступ 24/7',
    description: `В любое время дня и ночи вы имеете доступ к своему контейнеру.`,
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'Охрана 24 часа',
    description: `Круглосуточная охрана, видеофиксация и сигнализация.`,
  },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        {/*<SectionHeading*/}
          {/*sx={styles.heading}*/}
          {/*slogan="Идеальное решение для Вас"*/}
          {/*title="Наши преимущества"*/}
        {/*/>*/}
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 5],
    pb: [9, null, null, 12, 16, 5],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
