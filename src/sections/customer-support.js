/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';
import icon1 from 'assets/images/howtouse/build_material.webp';
import icon2 from 'assets/images/howtouse/goods.webp';
import icon3 from 'assets/images/howtouse/wheels.webp';
import icon4 from 'assets/images/howtouse/bike.webp';
import icon5 from 'assets/images/howtouse/velo.webp';
import icon6 from 'assets/images/howtouse/furniture.webp';
import icon7 from 'assets/images/howtouse/personal.webp';
import icon8 from 'assets/images/howtouse/instrument.webp';
const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Хранение строительных материалов',
    description: ``
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Хранение товаров для интернет-магазинов',
    description: ``,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Сезонное хранение шин',
    description: ``,
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'Зимнее хранение мотоцикла',
    description: ``,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Зимнее хранение велосипеда',
    description: ``,
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: ' Хранение мебели на время ремонта',
    description: ``,
  },
  {
    id: 7,
    icon: icon8,
    path: '#!',
    title: 'Хранение инструмента и оборудования',
    description: ``,
  },
  {
    id: 8,
    icon: icon7,
    path: '#!',
    title: 'Хранение личных вещей',
    description: ``,
  },
];

const UltimateFeatures = () => {
  return (
      <section id="store" sx={styles.section}>
        <SectionHeading
            sx={{ mb: [6, null, null, 14] , backgroundColor: "white"}}
            title="Что хранить?"
        />
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
