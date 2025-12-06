<template>
  <footer class="footer">
    <div class="container">
      <img :src="logoPath" alt="OurChat Logo" height="40" />
      <p class="footer_text">{{ t("footer.text") }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import { useI18n } from "vue-i18n";

type LogoVariant = "color" | "white";

const props = defineProps({
  logoVariant: {
    type: String as PropType<LogoVariant>,
    default: "color" as LogoVariant,
    validator: (value: string): value is LogoVariant =>
      ["color", "white"].includes(value),
  },
});

const { t } = useI18n();

const logoPath = computed(() => {
  return props.logoVariant === "white"
    ? "/resources/images/white.png"
    : "/resources/images/logo.png";
});
</script>

<style scoped></style>
