/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import SubscriptionForm from "../components/subscription-form";

const data = [
  {
    id: 1,
    title: `Что такое self-storage?`,
    contents: (
      <div>
          Self storage в переводе означает индивидуальное хранение вещей. В данный момент так можно обозначить целую индустрию предоставления услуг по хранению вещей в стационарных боксах или контейнерах. Впервые услуги self storage появилась в США в 50-е годы, сейчас этот способ хранения вещей там наиболее популярен. В 90-е годы прошлого века self storage стал популярен и в Европе: в Англии работает более 650 складов, во Франции — 170, в Голландии — около 100. В Украине первые склады индивидуального хранения появились в 2009-2010 годах, постепенно этот сегмент рынка растет, у нас сейчас только формируется культура хранения вещей вне дома.
      </div>
    ),
  },
  {
    id: 2,
    title: `Как обеспечивается безопасность моих вещей в SKladeo?`,
    contents: (
      <div>
          Безопасность хранимого имущества – это ключевой аспект нашей работы. Мы достигаем этого за счет комплекса мер:<br/>
        <span>- В качестве мест хранения используются морские контейнеры, которые имеют антивандальную конструкцию.</span><br/>
        <span>- Видеонаблюдение на всей территории с круглосуточной записью.</span><br/>
        <span>- Территория огорожена и охраняется сторожем.</span>
      </div>
    ),
  },
  {
    id: 3,
    title: ` Могу ли я зарезервировать место для хранения своего имущества онлайн?`,
    contents: (
      <div>
          Вы можете заказать звонок, менеджер центра Skladeo свяжется для уточнения деталей и подтверждения бронирования.
      </div>
    ),
  },
  {
    id: 4,
    title: `Что нужно для заключения договора аренды?`,
    contents: (
      <div>
          Действующий паспорт, контактный телефон.
      </div>
    ),
  },
  {
    id: 5,
    title: `Нужен ли собственный замок?`,
    contents: (
      <div>
        Мы не выдаем свои замки на время аренды, так как только личный замок может гарантировать безопасность имущества.
      </div>
    ),
  },
  {
    id: 6,
    title: `Предоставляете ли скидки?`,
    contents: (
      <div>
        Да, мы предоставляем скидки. Есть постоянные скидки в зависимости от предоплаты за длительный срок аренды.
      </div>
    ),
  },
  {
    id: 7,
    title: `Какие условия хранения в контейнерах моих вещей?`,
    contents: (
      <div>
        Морские контейнеры, используемые для хранения личного имущества, надежно защищают от осадков, пыли, ветра и солнечных лучей. Температура в них обычно равна уличной +-10 градусов.
      </div>
    ),
  },
  {
    id: 8,
    title: `Какие вещи хранить нельзя?`,
    contents: (
      <div>
        <span>- Вещи и товары, запрещенные к обороту на территории Украины;</span><br/>
          <span>- Токсичные, легковоспламеняющиеся, взрывоопасные и радиоактивные вещества;</span><br/>
          <span>- Взрывоопасные предметы, краску в негерметичной или ранее вскрытой упаковке;</span><br/>
          <span>- Горюче-смазочные материалы, легко воспламеняющиеся вещества и летучие жидкости;</span><br/>
          <span>- Растения, животные и птицы;</span><br/>
          <span>- Продукты питания и скоропортящиеся товары;</span><br/>
          <span>- Деньги и ценные бумаги;</span><br/>
          <span>- Оружие и боеприпасы.</span>
      </div>
    ),
  },

];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17] }}
          title="Часто задаваемые вопросы"
        />

        <Accordion items={data} />
        <span sx={styles.label} >Еще вопросы? Закажите звонок!</span>
        <Box sx={styles.loadMore}>
          <SubscriptionForm buttonLabel="Узнать больше" sx={styles.subscriptionForm} />
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 0, 0, 0],
    pb: [12, null, null, null, 5, 5],
  },
  loadMore: {
    display: "flex",
    paddingTop: [3, null, null, 0],
    alignItems: 'center',
    justifyContent: 'center',
    button: {
      ml: '20px',
      backgroundColor: '#5081f9',
      minHeight: 50,
      // ':hover': {
      //   backgroundColor: 'primary',
      //   color: 'white',
      // },
    },
  },
  label: {
    textAlign: 'center',
    color: 'heading',
    fontWeight: 500,
    fontSize: [2, null, null, 4],
    lineHeight: 1.5,
    letterSpacing: 'heading',
    paddingRight: [8, null, null, 0],
  }
};
