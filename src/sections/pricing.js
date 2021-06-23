/** @jsxRuntime classic */
/** @jsx jsx */
import Slider from 'react-slick';
import { jsx, Box, Container } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';
import PriceTable from 'components/cards/price-table';
import SectionHeading from 'components/section-heading';
import icon1 from 'assets/images/containers/cont-5.svg';
import icon2 from 'assets/images/containers/cont-7.svg';
import icon3 from 'assets/images/containers/cont-15.svg';
import icon4 from 'assets/images/containers/cont-30.svg';

const data = [
  {
    id: 1,
    title: 'Бокс 5м²(Грн/месяц)',
    amount: 5,
    image: icon1,
    is_recommended: false,
    cost1m: 1662,
    cost3m: 1575,
    cost6m: 1487,
    cost12m: 1312,
  },
  {
    id: 2,
    title: 'Бокс 7,5м²(Грн/месяц)',
    amount: 15,
    image: icon2,
    is_recommended: true,
    cost1m: 2280,
    cost3m: 2160,
    cost6m: 2040,
    cost12m: 1800,
  },
  {
    id: 3,
    title: 'Бокс 15м²(Грн/месяц)',
    amount: 20,
    image: icon3,
    is_recommended: false,
    cost1m: 3990,
    cost3m: 3780,
    cost6m: 3570,
    cost12m: 3150,
  },
  {
    id: 4,
    title: 'Бокс 30м²(Грн/месяц)',
    amount: 30,
    image: icon4,
    is_recommended: false,
    cost1m: 6840,
    cost3m: 6120,
    cost6m: 5760,
    cost12m: 5040,
  },
];

const settings = {
  // slidesToShow: 3,
  // slidesToScroll: 1,
  arrows: false,
  dots: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        // fade: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        fade: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Pricing = () => {
  const isTablet = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  return (
    <section id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 14] }}
          slogan="Deal for your business"
          title="Дольше хранишь - больше скидка"
        />
        <Box sx={styles.grid}>
          {isTablet && (
            <ul as="ul" sx={styles.features}>
              <li>За 1 месяц - 5% </li>
              <li>За 3 месяца - 15% </li>
              <li>За 6 месяцев - 20% </li>
              <li>За год - 30% </li>
            </ul>
          )}

          <Slider sx={styles.priceGroup} {...settings}>
            {data.map((price) => (
              <PriceTable key={price.id} data={price} />
            ))}
          </Slider>
        </Box>
      </Container>
    </section>
  );
};

export default Pricing;

const styles = {
  section: {
    pt: [6, null, 0, null, 10, 14],
    pb: [8, null, null, null, 10, 17],
  },
  grid: {
    maxWidth: 1133,
    display: [null, null, null, null, 'grid'],
    alignItems: [null, null, null, null, 'center'],
    justifyContent: [null, null, null, null, 'center'],
    gridTemplateColumns: [null, null, null, null, '183px 1fr'],
    mx: 'auto',
    '.slick-list': {
      paddingTop: ['31px', null, null, null, 0],
    },
    '.slick-dots': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex !important',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      li: {
        display: 'flex',
      },
      button: {
        backgroundColor: '#CED7E1',
        border: 0,
        outline: 0,
        padding: 0,
        margin: '0 3.5px',
        width: 10,
        height: 10,
        borderRadius: '50%',
        overflow: 'hidden',
        textIndent: '-9999rem',
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        backgroundColor: 'heading',
        width: 13,
        height: 13,
      },
    },
  },
  priceGroup: {
    gap: 2,
    alignItems: 'flex-end',
    display: [null, null, null, null, 'grid'],
    gridTemplateColumns: [null, null, null, null, 'repeat(4, 1fr)'],
  },
  features: {
    pl: 0,
    pt: [ null, null, null, null, '126px', '143px'],
    '@media (min-width:1384px) and (max-width:1503px)': {
      pt: `141px!important`
    },
    transform: [
      null,
      null,
      null,
      null,
      'translateY(-10px)',
      'translateY(-23px)',
    ],
    li: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 500,
      minHeight: [null, null, null, null, 50, 59],
      '+ li': {
        borderTop: (t) => `1px solid ${t.colors.borderColor}`,
      },
    },
  },
};
