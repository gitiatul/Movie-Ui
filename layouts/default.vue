<template>
  <div>
    <CookieConsent />

    <transition name="slidedown">
      <SearchForm v-if="searchOpen" />
    </transition>
    <Logo />
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CookieConsent from '~/components/global/CookieConsent';
import SearchForm from '~/components/global/SearchForm';
import Nav from '~/components/global/Nav';
import Logo from '~/components/global/Logo';
import Footer from '~/components/global/Footer';

export default {
  components: {
    CookieConsent,
    SearchForm,
    Nav,
    Logo,
    Footer,
  },

  computed: {
    ...mapState('search', ['searchOpen']),
  },
};
</script>
