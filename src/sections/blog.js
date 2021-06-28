/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import Post from 'components/cards/post';

import news1 from 'assets/images/blog/1.webp';
import news2 from 'assets/images/blog/2.webp';
import news3 from 'assets/images/blog/3.webp';
import news4 from 'assets/images/blog/4.webp';

const data = [
  {
    id: 1,
    image: news1,
    title: 'Не пропустите! Открытие склада на пр.Слобожанский 114 - 5 июля ',
    desc:
      '',
    link: '#',
  },
  {
    id: 2,
    image: news2,
    title:
      'Все клиенты по предварительной брони получают 15% скидку ',
    desc: '',
    link: '#',
  },
  {
    id: 3,
    image: news3,
    title: 'Освободить место для себя и любимых теперь просто, как никогда. Skladeo экономит ваше жизненное пространство',
    desc: '',
    link: '',
  },
  {
    id: 4,
    image: news4,
    title: 'Теперь мы можем помочь вам с упаковкой и доставкой ваших вещей!',
    desc: '',
    link: '',
  },
];

const masonryOptions = {
  originTop: false,
};

const Blog = () => {
  return (
    <section id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 14] }}
        />
        <Masonry sx={styles.masonry} options={masonryOptions}>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [6, null, null, null, 2, 10, 6],
    pb: [2, null, null, null, 6, 10, 6],
  },
  masonry: {
    maxWidth: 1250,
    mx: [-3, null, null, null, 'auto'],
  },
};
