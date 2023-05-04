const heroItems = [
  {
    title: 'Lorem ipsum dolor sit amet!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.'
  },
  {
    title: 'Lorem ipsum!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.\n' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.'
  },
  {
    title: 'Lorem ipsum!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum cupiditate dolores fuga fugit, labore neque nisi non odit qui quod repudiandae soluta ullam veniam voluptates! Ab hic libero optio praesentium sit! Autem corporis esse impedit mollitia, quasi reprehenderit! Aut, corporis cupiditate deserunt dolore ducimus error minus molestias natus nisi odit perferendis ratione, similique suscipit ullam veritatis voluptatem voluptatibus! Consectetur ea earum laboriosam magnam nobis numquam odio officiis sapiente tempora temporibus? Ab aliquam aut autem corporis delectus dolore ea esse eveniet, expedita facere hic id impedit inventore laudantium nemo, nobis numquam odit quaerat quisquam quos, recusandae tenetur veniam veritatis. Accusantium architecto asperiores consequatur excepturi expedita harum iste maxime necessitatibus nisi non officiis quod recusandae, saepe sunt unde voluptates voluptatum. Delectus doloribus ducimus esse est et eveniet facere illum incidunt laudantium libero nostrum quae repellat repellendus, reprehenderit similique soluta tenetur vitae voluptas voluptatibus voluptatum. Dolore dolorum eius hic porro repellat, sequi! Alias corporis eos fuga fugiat ipsum maxime molestias omnis quisquam quod ratione rem veniam voluptatem, voluptates! Aut et incidunt magnam odit quas sunt! Ad adipisci alias aliquid beatae consectetur consequuntur debitis deleniti, dolor, ea et explicabo facilis inventore laborum maiores molestiae molestias nam natus nobis non quas quibusdam quidem repellendus reprehenderit temporibus unde ut vitae? Aliquam aliquid amet architecto, delectus deleniti dicta dignissimos distinctio doloribus eaque illum ipsam iste magni necessitatibus numquam placeat praesentium quidem quisquam quod ratione voluptate! Aliquid cum cumque dolor ea fugiat harum maiores natus, quae reprehenderit voluptatibus! Cupiditate optio sed tenetur! Delectus deserunt ea eligendi natus, repudiandae rerum temporibus tenetur? Debitis dolore dolores expedita fuga id necessitatibus numquam odio officiis quo suscipit tempore veniam, voluptas voluptates? Accusantium at aut blanditiis delectus dignissimos doloremque ea eaque nemo perspiciatis, quas similique ullam vero. Accusamus amet assumenda cum ex fugiat nesciunt pariatur repellat sint voluptas voluptate! Cum delectus dolorum eaque expedita ipsam iste iure iusto qui tempora voluptatum. Ab adipisci architecto beatae cupiditate, delectus dolores doloribus est excepturi fugiat ipsam minima non officiis optio perferendis praesentium, quibusdam quis ratione repellendus saepe sequi sit suscipit vitae voluptas voluptate voluptatem. Error et ipsa, laboriosam quam quasi quisquam repudiandae similique totam! In!'
  }
];

const title = document.querySelector('.hero-info__inner-title');
const text = document.querySelector('.hero-info__inner-text');
const slideChangeBtn = document.querySelector('.wrapper__slider-btn');
const scroll = document.querySelector('.scroll');
const activeScroll = document.querySelector('.scroll-active');
const lastPage = document.querySelector('.last-page');
const pageNumber = document.querySelector('.page');
const footerPageNumber = document.querySelector('.footer__page');

const pagesCount = heroItems.length;
lastPage.innerText = `0${pagesCount}`;

const scrollHeight = scroll.offsetHeight;
const mediaQuery = window.matchMedia('(max-width: 1380px)');

if (mediaQuery.matches) {
  const scrollWidth = scroll.offsetWidth;
  activeScroll.style.width = `clamp(2px, 15vw, ${scrollWidth / pagesCount}px)`;
  activeScroll.style.height = '4px';
} else {
  activeScroll.style.height = `${scrollHeight / pagesCount}px`;
}

const onPageChange = () => {
  let i = Number(pageNumber.innerText.slice(1));

  if (pageNumber.innerText === `0${pagesCount}`) {
    i = 0;
  }

  title.innerText = heroItems[i].title;
  text.innerText = heroItems[i].text;
  pageNumber.innerText = `0${i + 1}`;
  footerPageNumber.innerText = `0${i + 1}`;

  if (mediaQuery.matches) {
    const scrollWidth = scroll.offsetWidth;
    activeScroll.style.transform = `translateX(${i * scrollWidth / pagesCount}px)`;
    activeScroll.style.height = '4px';
  } else {
    activeScroll.style.transform = `translateY(${i * scrollHeight / pagesCount}px)`;
  }

  if (pageNumber.innerText === `0${pagesCount}`) {
    lastPage.style.opacity = '1';
  } else {
    lastPage.style.opacity = '.3';
  }
};

slideChangeBtn.addEventListener('click', onPageChange);
