<template>
  <footer :class="$style.footer">
    <p>&copy; {{ new Date().getFullYear() }} HDHuB4u. All rights reserved.</p>
    <p>
      Designed by HDHuB4u, data provided by
      <a target="_blank" href="https://www.themoviedb.org/" rel="noopener"
        >TMDb</a
      >.
    </p>
    <div style="font-size: 1.4rem;">
      <nuxt-link to="/contact-us" class="btn" style="padding-right: 20px;"
        >Contact Us</nuxt-link
      >
      <nuxt-link to="/privacy-policy" class="btn" style="padding-right: 20px;"
        >Privacy</nuxt-link
      >
      <nuxt-link to="/about-us" class="btn" style="padding-right: 20px;"
        >About Us</nuxt-link
      >
    </div>
  </footer>
</template>

<style lang="scss" module>
@import "~/assets/css/utilities/_variables.scss";

.footer {
  padding: 2rem 1.5rem 6.5rem;
  color: $text-color-grey;

  @media (min-width: $breakpoint-small) {
    padding-right: 4rem;
    padding-left: 4rem;
  }

  @media (min-width: $breakpoint-large) {
    padding: 2rem 5rem;
  }

  p {
    margin: 0.3rem 0;
    font-size: 1.4rem;
  }

  a {
    color: $text-color-grey;
    text-decoration: underline;
  }

  ul {
    display: flex;
    margin: 2rem 0 0 -0.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.4rem;
      height: 4.4rem;

      svg {
        transition: all 0.3s ease-in-out;
      }

      &:hover,
      &:focus {
        svg {
          fill: #fff;
        }
      }
    }
  }
}
</style>
