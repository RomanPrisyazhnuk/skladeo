/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/1.png';
import icon2 from 'assets/images/features/2.png';
import icon3 from 'assets/images/features/3.png';
import icon4 from 'assets/images/features/4.png';
import icon5 from 'assets/images/features/5.png';
import icon6 from 'assets/images/features/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Освещение',
    description: `Внутри каждого контейнера мы предоставляем освещение для вашего комфорта.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Расположение',
    description: `Склад на ходится на красной линии на пр.Слобожанский`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Погрузка и разгрузка',
    description: `Подъезд к воротам контейнера без проблем, для разгрузки и погрузки`,
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'Доступ 24/7',
    description: `В любое время дня и ночи вы имеете доступ к своему контейнеру.`,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Охрана 24 часа',
    description: `Круглосуточная охрана, видеофиксация и сигнализация.`,
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: 'Большой выбор',
    description: `Площадь складских боксов от 5 до 30 м².`,
  },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Идеальное решение для Вас"
          title="Наши преимущества"
        />
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
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
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
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
