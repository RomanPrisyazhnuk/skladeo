/** @jsxRuntime classic */
/** @jsx jsx */
import Slider from 'react-slick';
import { jsx, Box, Container, Image } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';
import PriceTable from 'components/cards/price-table';
import SectionHeading from 'components/section-heading';
import icon1 from 'assets/images/containers/cont-5.svg';
import icon2 from 'assets/images/containers/cont-7.svg';
import icon3 from 'assets/images/containers/cont-15.svg';
// import icon4 from 'assets/images/containers/cont-30.svg';
// import iconDiscount from 'assets/images/kontejner-5.webp';
import SubscriptionForm from "../components/subscription-form";

const data = [
  {
    id: 1,
    title: 'Бокс 5м²',
    amount: 5,
    image: icon1,
    is_recommended: false,
    cost1m: '950(Грн/месяц)',
  },
  {
    id: 2,
    title: 'Бокс 7,5м²',
    amount: 15,
    image: icon2,
    is_recommended: true,
    cost1m: '1300(Грн/месяц)',
  },
  {
    id: 3,
    title: 'Бокс 15м²',
    amount: 20,
    image: icon3,
    is_recommended: false,
    cost1m: '2300(Грн/месяц)',
  },
  // {
  //   id: 4,
  //   title: 'Бокс 30м²',
  //   amount: 30,
  //   image: icon4,
  //   is_recommended: false,
  //   cost1m: '5500(Грн/месяц)',
  // },
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
  // const isTablet = useMediaQuery({
  //   query: '(min-width: 1024px)',
  // });
  return (
    <section id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 14] }}
          title="Цена за аренду бокса"
        />
        <Box sx={styles.grid}>
          {/*{isTablet && (*/}
            {/*<ul as="ul" sx={styles.features}>*/}
              {/*<li>До 3-х месяцев</li>*/}
              {/*<li>От 3-х месяцаев - 5% </li>*/}
              {/*<li>От 6-ти месяцев - 10% </li>*/}
              {/*<li>От года - 15% </li>*/}
            {/*</ul>*/}
          {/*)}*/}

          <Slider sx={styles.priceGroup} {...settings}>
            {data.map((price) => (
              <PriceTable key={price.id} data={price} />
            ))}
          </Slider>
          {/*<div sx={styles.discount}>*/}
            {/*<div>2 недели бесплатного хранения - при аренде от 3-х месяцев</div>*/}
            {/*<Image src={iconDiscount} alt={'Контейнер'} />*/}
          {/*</div>*/}
        </Box>
        <Box sx={styles.loadMore}>
        <SubscriptionForm buttonLabel="Заказать бокс" sx={styles.subscriptionForm} />
        </Box>
      </Container>
    </section>
  );
};

export default Pricing;

const styles = {
  section: {
    pt: [6, null, 0, null, 10, 3],
    pb: [8, null, null, null, 10, 0],
  },
  grid: {
    maxWidth: 1133,
    display: [null, null, null, null, 'grid'],
    alignItems: [null, null, null, null, 'center'],
    justifyContent: [null, null, null, null, 'center'],
    // gridTemplateColumns: [null, null, null, null, '183px 1fr'],
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
  loadMore: {
    display: "flex",
    paddingTop: [3, null, null, 3],
    alignItems: 'center',
    justifyContent: 'center',
    button: {
      ml: '20px',
      backgroundColor: '#5081f9',
      minHeight: 50,
      // ':hover': {
      // },
    },
  },
  discount: {
    gap: 2,
    fontSize: '24px',
    letterSpacing: '-0.5px',
    width: "100%",
    display: [null, null, null, null, 'flex'],
    alignItems: [null, null, null, null, 'center'],
    justifyContent: [null, null, null, null, 'center'],
  },
  priceGroup: {
    gap: 2,
    width: "100%",
    display: [null, null, null, null, 'grid'],
    gridTemplateColumns: [null, null, null, null, 'repeat(3, 1fr)'],
  },
  '@media screen and (min-width:1384px) and (max-width:1503px)': {
    features: {
    pt: `231px!important`
    }
  },
  // features: {
  //   pl: 0,
  //   pt: [ null, null, null, null, '203px', '287px'],
  //
  //   transform: [
  //     null,
  //     null,
  //     null,
  //     null,
  //     'translateY(-10px)',
  //     'translateY(-23px)',
  //   ],
  //   li: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     fontWeight: 500,
  //     minHeight: [null, null, null, null, 50, 59],
  //     '+ li': {
  //       borderTop: (t) => `1px solid ${t.colors.borderColor}`,
  //     },
  //   },
  // },
};
