import { ref, computed, inject, onMounted, watch, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-e2e4e15e.js";
import { S as SectionBorder } from "./SectionBorder-50fdc36f.js";
import { useForm, router } from "@inertiajs/vue3";
import { a as _sfc_main$4 } from "./TextInput-14bc0530.js";
import { _ as _sfc_main$2 } from "./InputLabel-d47442f5.js";
import { _ as _sfc_main$3 } from "./SecondaryButton-0974b11b.js";
import { a as useCategoryStore } from "./NotificationComponent-fe8292d8.js";
import axios from "axios";
import "@vueuse/core";
import "vue-collapsed";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./Checkbox-74b17051.js";
import "flowbite";
import "./ResponsiveNavLink-79527a9d.js";
import "vue3-popper";
import "pinia";
const Registration_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Registration",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    const props = __props;
    const formattedPrice = ref("");
    const categoriesStore = useCategoryStore();
    const categories = computed(() => categoriesStore.categoriesGet.categories);
    inject("$swal");
    const step = ref(1);
    useForm({
      _method: "PUT",
      photo: null
    });
    const photoPreview = ref(null);
    const photoInput = ref(null);
    const selectNewPhoto = () => {
      photoInput.value.click();
    };
    const subcategories = ref([]);
    const selectedCategoryId = ref(null);
    const selectedSubcategoryId = ref(null);
    const freelanceElement = ref({
      nom: "",
      prenom: "",
      email: props.user.email,
      phone: props.user.phone,
      taux: "",
      portfolio: "",
      description: "",
      experience: ""
    });
    const localisation = ref({
      addresse: "",
      commune: "",
      ville: ""
    });
    const experience = ref([]);
    const selectedExperiment = ref({
      title: "",
      level: ""
    });
    const education = ref([]);
    const selectedEducation = ref({
      diplome: "",
      universite: "",
      annee: ""
    });
    const langue = ref([]);
    const selectedLangue = ref({
      langue: "",
      level: ""
    });
    const certification = ref([]);
    const selectedCertificat = ref({
      certifier: "",
      delivrer: "",
      annee: ""
    });
    const comptes = ref([]);
    const selectedComptes = ref({
      compte: "",
      lien: ""
    });
    const error = ref({
      experience: "",
      education: "",
      certification: "",
      langue: "",
      compte: "",
      description: ""
    });
    const addEducation = () => {
      if (!selectedEducation.value.diplome || !selectedEducation.value.universite || !selectedEducation.value.annee) {
        error.value.education = "les deux element sont requis.";
        return;
      }
      education.value.push({
        diplome: selectedEducation.value.diplome,
        universite: selectedEducation.value.universite,
        annee: selectedEducation.value.annee
      });
      selectedEducation.value.diplome = "";
      selectedEducation.value.universite = "";
      selectedEducation.value.annee = "";
      error.value.education = "";
    };
    const addExperience = () => {
      if (!selectedExperiment.value.title || !selectedExperiment.value.level) {
        error.value.experience = "les deux element sont requis.";
        return;
      }
      experience.value.push({
        title: selectedExperiment.value.title,
        level: selectedExperiment.value.level
      });
      selectedExperiment.value.title = "";
      selectedExperiment.value.level = "";
      error.value.experience = "";
    };
    const addCertification = () => {
      if (!selectedCertificat.value.certifier || !selectedCertificat.value.delivrer || !selectedCertificat.value.annee) {
        error.value.certification = "les deux element sont requis.";
        return;
      }
      certification.value.push({
        certifier: selectedCertificat.value.certifier,
        delivrer: selectedCertificat.value.delivrer,
        annee: selectedCertificat.value.annee
      });
      selectedCertificat.value.certifier = "";
      selectedCertificat.value.delivrer = "";
      selectedCertificat.value.annee = "";
      error.value.certification = "";
    };
    const addLangue = () => {
      if (!selectedLangue.value.langue || !selectedLangue.value.level) {
        error.value.langue = "les deux element sont requis.";
        return;
      }
      langue.value.push({
        langue: selectedLangue.value.langue,
        level: selectedLangue.value.level
      });
      selectedLangue.value.langue = "";
      selectedLangue.value.level = "";
      error.value.langue = "";
    };
    const addComptes = () => {
      if (!selectedComptes.value.lien || !selectedComptes.value.compte) {
        error.value.compte = "les deux element sont requis.";
        return;
      }
      comptes.value.push({
        compte: selectedComptes.value.compte,
        lien: selectedComptes.value.lien
      });
      selectedComptes.value.compte = "";
      selectedComptes.value.lien = "";
      error.value.compte = "";
    };
    const languagesArray = ref([]);
    function getWorldLanguages() {
      return axios.get("https://restcountries.com/v3/all").then((response) => {
        const data = response.data;
        const uniqueLanguagesSet = /* @__PURE__ */ new Set();
        data.forEach((country) => {
          if (country.languages) {
            Object.entries(country.languages).forEach(([id, language]) => {
              uniqueLanguagesSet.add(language);
            });
          }
        });
        const uniqueLanguagesArray = Array.from(uniqueLanguagesSet).map((language) => ({
          language,
          name: language
          // Vous pouvez remplacer 'id' par le nom de la langue si vous le souhaitez
        }));
        languagesArray.value = uniqueLanguagesArray;
        console.log(languagesArray.value);
      }).catch((error2) => {
        console.error("Erreur lors de la récupération des langues", error2);
        languagesArray.value = [];
      });
    }
    const comptesSelector = ref([
      { picture: "/images/logo/tiktok.png", label: "Tiktok", value: "Tiktok" },
      { picture: "/images/logo/facebook.png", label: "Facebook", value: "Facebook" },
      { picture: "/images/logo/tiktok.png", label: "twitter", value: "twitter" }
    ]);
    onMounted(() => {
      getWorldLanguages();
    });
    const loading = ref(false);
    const fetchSubcategories = async () => {
      loading.value = true;
      try {
        if (selectedCategoryId.value) {
          const response = await axios.get(`/api/subcategories/${selectedCategoryId.value}`);
          subcategories.value = response.data.subcategories;
        } else {
          subcategories.value = [];
        }
      } catch (error2) {
        console.error("An error occurred while fetching subcategories:", error2);
      }
      loading.value = false;
    };
    watch(selectedCategoryId, () => {
      fetchSubcategories();
    });
    const registerLoad = ref(false);
    const loadingVerif = ref(false);
    const code = useForm({
      code: ""
    });
    const validerMail = () => {
      loadingVerif.value = true;
      code.post(route("verificationCode"), {
        preserveScroll: true,
        onSuccess: () => {
          verifier.value = false;
          loadingVerif.value = false;
        },
        onError: (errors) => {
          loadingVerif.value = false;
          console.log(errors);
        }
      });
    };
    const verifier = ref(false);
    const loadingVerifEmail = ref(false);
    const verification = () => {
      loadingVerifEmail.value = true;
      router.post(
        route("verificationMail"),
        {},
        {
          onSuccess: () => {
            verifier.value = true;
            loadingVerifEmail.value = false;
          },
          preserveState: true,
          preserveScroll: true
        }
      );
    };
    const experienceAnnee = ref([
      { name: "0 a 2 ans", id: "0-2 ans" },
      { name: "2 a 5 ans", id: "2-5 ans" },
      { name: "+ 7 ans", id: "+ 7 ans" }
    ]);
    const levelSelector = ref([
      { name: "Debutant", id: "Debutant" },
      { name: "intermediare", id: "intermediare" },
      { name: "Expert", id: "Expert" }
    ]);
    const d = /* @__PURE__ */ new Date();
    let year = d.getFullYear();
    const anneeSelected = ref([]);
    for (let index = 1999; index < year; index++) {
      anneeSelected.value.push(index);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MazSelect = resolveComponent("MazSelect");
      const _component_MazInput = resolveComponent("MazInput");
      const _component_Button = resolveComponent("Button");
      const _component_MazInputPrice = resolveComponent("MazInputPrice");
      const _component_MazTextarea = resolveComponent("MazTextarea");
      const _component_MazAvatar = resolveComponent("MazAvatar");
      const _component_Dialog = resolveComponent("Dialog");
      const _component_MazInputCode = resolveComponent("MazInputCode");
      _push(`<!--[--><div class="relative min-h-screen pt-16 text-gray-700 border-t border-gray-100"><div><header class="bg-white top-0 lg:relative sticky lg:z-0 z-[60] shadow dark:bg-gray-800"><div class="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8"><div class="flex flex-col justify-between md:flex-row md:items-center"><ul class="items-center justify-around hidden gap-6 dark:text-gray-300 lg:flex"><li class="${ssrRenderClass([step.value === 1 ? "text-amber-600 " : "", "flex px-1 cursor-pointer"])}"><span class="${ssrRenderClass([step.value === 1 ? "bg-amber-600 text-white " : "", "flex items-center justify-center w-6 h-6 mr-2 border border-gray-200 rounded-full"])}"> 1 </span><span>Compentences </span></li><li class="${ssrRenderClass([step.value === 2 ? "text-amber-600 " : "", "flex px-1 cursor-pointer"])}"><span class="${ssrRenderClass([step.value === 2 ? "bg-amber-600 text-white " : "", "flex items-center justify-center w-6 h-6 mr-2 border border-gray-200 rounded-full"])}">2 </span><span>Information personnelles </span></li><li class="${ssrRenderClass([step.value === 3 ? "text-amber-600 " : "", "flex px-1 cursor-pointer"])}"><span class="${ssrRenderClass([step.value === 3 ? "bg-amber-600 text-white " : "", "flex items-center justify-center w-6 h-6 mr-2 border border-gray-200 rounded-full"])}">3 </span><span>Formations </span></li><li class="${ssrRenderClass([step.value === 4 ? "text-amber-600 " : "", "flex px-1 cursor-pointer"])}"><span class="${ssrRenderClass([step.value === 4 ? "bg-amber-600 text-white " : "", "flex items-center justify-center w-6 h-6 mr-2 border border-gray-200 rounded-full"])}">4 </span><span>Comptes lié </span></li><li class="${ssrRenderClass([step.value === 5 ? "text-amber-600 " : "", "flex px-1 cursor-pointer"])}"><span class="${ssrRenderClass([step.value === 5 ? "bg-amber-600 text-white " : "", "flex items-center justify-center w-6 h-6 mr-2 border border-gray-200 rounded-full"])}">4 </span><span>Sécurite du compte </span></li></ul><div class="block mb-2 rounded-lg dark:bg-gray-800 dark:p-3 lg:hidden"><div class="mb-1 text-xs font-bold leading-tight tracking-wide text-gray-700 uppercase dark:text-gray-200">${ssrInterpolate(`Etape: ${step.value} of 5`)}</div><div class="flex-1"><div style="${ssrRenderStyle(step.value === 1 ? null : { display: "none" })}"><div class="text-lg font-bold leading-tight text-gray-700 dark:text-gray-200">Compentences </div></div><div style="${ssrRenderStyle(step.value === 2 ? null : { display: "none" })}"><div class="text-lg font-bold leading-tight text-gray-700 dark:text-gray-200">Informations Personnelles </div></div><div style="${ssrRenderStyle(step.value === 3 ? null : { display: "none" })}"><div class="text-lg font-bold leading-tight text-gray-700 dark:text-gray-200">Formations</div></div><div style="${ssrRenderStyle(step.value === 4 ? null : { display: "none" })}"><div class="text-lg font-bold leading-tight text-gray-700 dark:text-gray-200">Comptes lies</div></div><div style="${ssrRenderStyle(step.value === 5 ? null : { display: "none" })}"><div class="text-lg font-bold leading-tight text-gray-700 dark:text-gray-200">Securite Du compte </div></div></div></div><div class="items-center w-full md:w-64"><div class="w-full mr-2 bg-gray-100 rounded-full dark:bg-gray-800"><div class="h-2 text-xs leading-none text-center text-white bg-green-500 rounded-full" style="${ssrRenderStyle("width: " + parseInt(step.value / 5 * 100) + "%")}"></div></div><div class="w-10 text-xs text-gray-700 dark:text-gray-200">${ssrInterpolate(parseInt(step.value / 5 * 100) + "%")}</div></div></div></div></header><div class="mt-8"><div class="px-6" style="${ssrRenderStyle(step.value === 1 ? null : { display: "none" })}"><div class="mb-4 lg:grid lg:grid-cols-3 lg:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-xl font-medium text-gray-900 dark:text-gray-100"> VOS COMPTENCES </h3><p class="mt-1 text-gray-600 text-md dark:text-gray-100"> Parlez nous un peu de vous. Ces informations apparaîtront sur votre profil public, afin que les acheteurs potentiels puissent mieux vous connaître.&#39; </p></div></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="mb-4 md:grid md:mb-0 md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Votre Categorie </h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-300"> Commencez par nous dire dans quel categorie vous vous situer </p></div></div><div class="mt-5 md:mt-0 md:col-span-2"><div><div class="px-4 py-5 bg-white rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-200 sm:p-6"><div class="gap-6 md:grid md:grid-cols-1 md:mb-2"><div class="w-full">`);
      _push(ssrRenderComponent(_component_MazSelect, {
        modelValue: selectedCategoryId.value,
        "onUpdate:modelValue": ($event) => selectedCategoryId.value = $event,
        label: "Votre categorie",
        options: categories.value,
        "option-value-key": "id",
        "option-label-key": "name",
        "option-input-value-key": "name"
      }, null, _parent));
      _push(`</div>`);
      if (loading.value) {
        _push(`<div class=""><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (subcategories.value.length) {
        _push(`<div class="grid gap-4 mt-4 mb-6 lg:grid-cols-2"><div class="block">`);
        _push(ssrRenderComponent(_component_MazSelect, {
          modelValue: selectedSubcategoryId.value,
          "onUpdate:modelValue": ($event) => selectedSubcategoryId.value = $event,
          label: "Selectionner sous categorie",
          options: subcategories.value,
          "option-value-key": "id",
          "option-label-key": "name",
          "option-input-value-key": "name",
          search: "",
          multiple: ""
        }, null, _parent));
        _push(`</div><div class="flex justify-content-center">`);
        _push(ssrRenderComponent(_component_MazSelect, {
          modelValue: freelanceElement.value.experience,
          "onUpdate:modelValue": ($event) => freelanceElement.value.experience = $event,
          label: "Experience",
          options: experienceAnnee.value,
          "option-value-key": "id",
          "option-label-key": "name",
          "option-input-value-key": "name"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="mb-4 md:grid md:mb-0 md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Compentences </h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-300"> Énumérez les compétences liées aux services que vous offrez et ajoutez votre niveau d&#39;expérience. </p></div></div><div class="mt-5 md:mt-0 md:col-span-2"><div><div class="px-4 py-5 bg-white rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-200 sm:p-6"><div class=""><div><p class="mb-2 text-lg font-bold dark:text-gray-300">Commpetences :</p><ul class="mb-4 text-gray-700 dark:text-gray-200"><!--[-->`);
      ssrRenderList(experience.value, (exp, index) => {
        _push(`<li class="flex gap-2 px-2"><span>${ssrInterpolate(exp.title)} - ${ssrInterpolate(exp.level)}</span><button class="btn btn-sm btn-circle btn-outline"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></li>`);
      });
      _push(`<!--]--></ul></div><div class="grid gap-2 mb-4 lg:grid-cols-3"><div>`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "competences",
        modelValue: selectedExperiment.value.title,
        "onUpdate:modelValue": ($event) => selectedExperiment.value.title = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_MazSelect, {
        modelValue: selectedExperiment.value.level,
        "onUpdate:modelValue": ($event) => selectedExperiment.value.level = $event,
        label: "Experience",
        options: levelSelector.value,
        "option-value-key": "id",
        "option-label-key": "name",
        "option-input-value-key": "name"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: addExperience,
        label: "Ajouter",
        severity: "info",
        outlined: ""
      }, null, _parent));
      _push(`</div></div>`);
      if (error.value.experience) {
        _push(`<div class="text-sm text-red-600">${ssrInterpolate(error.value.experience)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="mb-4 md:grid md:mb-0 md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Votre taux Journalier </h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-300"> Indiquez Votre taux journalier moyen , sachant qu&#39;une journee represente environ 8 heures de travail </p></div></div><div class="mt-5 md:mt-0 md:col-span-2"><div><div class="grid px-4 py-5 bg-white rounded-lg shadow lg:grid-cols-2 dark:bg-gray-800 dark:border dark:border-gray-200 sm:p-6"><div class="w-full lg:col-span-1">`);
      _push(ssrRenderComponent(_component_MazInputPrice, {
        modelValue: freelanceElement.value.taux,
        "onUpdate:modelValue": ($event) => freelanceElement.value.taux = $event,
        label: "Taux",
        currency: "USD",
        locale: "en-US",
        min: 5,
        max: 1e3,
        onFormatted: ($event) => formattedPrice.value = $event
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="md:grid md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Votre Localisation </h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-300"> Ou travaillez-vous le plus souvent. </p></div></div><div class="mt-5 md:mt-0 md:col-span-2"><div><div class="px-4 py-5 bg-white rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-200 sm:p-6"><div class="grid gap-2 lg:grid-cols-3">`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Adresse",
        modelValue: localisation.value.addresse,
        "onUpdate:modelValue": ($event) => localisation.value.addresse = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_MazInput, {
        label: "ville",
        modelValue: localisation.value.ville,
        "onUpdate:modelValue": ($event) => localisation.value.ville = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Commune",
        modelValue: localisation.value.commune,
        "onUpdate:modelValue": ($event) => localisation.value.commune = $event
      }, null, _parent));
      _push(`</div></div></div></div><div class="md:grid md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"></div><div class="mt-2 md:mt-4 md:col-span-2"></div></div></div></div><div class="px-6" style="${ssrRenderStyle(step.value === 2 ? null : { display: "none" })}"><div class="mb-4 lg:grid lg:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-xl font-medium text-gray-900 dark:text-gray-100"> INFORMATIONNS PERSONNELLES </h3><p class="mt-1 text-gray-600 text-md dark:text-gray-100"> Parlez nous un peu de vous. Ces informations apparaîtront sur votre profil public, afin que les acheteurs potentiels puissent mieux vous connaître. </p></div></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="md:grid md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Nom &amp; Prenom&#39; </h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-300"> Prive* </p></div></div><div class="mt-5 md:mt-0 md:col-span-2"><div><div class="px-4 py-5 bg-white dark:bg-gray-800 dark:border dark:border-gray-200 rounded-lg sm:p-6 shadow {{ isset($actions) ? &#39;sm:rounded-tl-md sm:rounded-tr-md&#39; : &#39;sm:rounded-md&#39; }}"><div class="grid gap-6 md:grid-cols-2 md:mb-2">`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Nom",
        modelValue: freelanceElement.value.nom,
        "onUpdate:modelValue": ($event) => freelanceElement.value.nom = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_MazInput, {
        class: "block w-full",
        label: "Prenom",
        modelValue: freelanceElement.value.prenom,
        "onUpdate:modelValue": ($event) => freelanceElement.value.prenom = $event
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="mt-4 md:grid md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Photo de Profile <span class="text-red-600">*</span></h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-300"> Ajoutez une photo de profil de vous-même afin que les clients sachent exactement avec qui ils travailleront.&#39; </p></div></div><div class="mt-5 md:mt-0 md:col-span-2"><form><div class="px-4 py-5 bg-white dark:bg-gray-800 dark:border dark:border-gray-200 rounded-lg sm:p-6 shadow {{ isset($actions) ? &#39;sm:rounded-tl-md sm:rounded-tr-md&#39; : &#39;sm:rounded-md&#39; }}"><div class="gap-6 md:grid"><div class="col-span-6"><input type="file" class="hidden">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        for: "photo",
        value: "Photo"
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle(photoPreview.value ? null : { display: "none" })}" class="mt-2"><span class="block w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full" style="${ssrRenderStyle("background-image: url('" + photoPreview.value + "');")}"></span></div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        class: "mt-2 mr-2",
        type: "button",
        onClick: selectNewPhoto
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ajouter une Photo `);
          } else {
            return [
              createTextVNode(" Ajouter une Photo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { class: "mt-2" }, null, _parent));
      _push(`</div></div></div></form></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="mt-4 md:grid md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> description </h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-300"> Partagez un peu votre experience de travail; les projets interessant que vous avez realiser et votre Domaine d&#39;expertise </p></div></div><div class="mt-5 md:mt-0 md:col-span-2"><form><div class="px-4 py-5 bg-white dark:bg-gray-800 dark:border dark:border-gray-200 rounded-lg sm:p-6 shadow {{ isset($actions) ? &#39;sm:rounded-tl-md sm:rounded-tr-md&#39; : &#39;sm:rounded-md&#39; }}"><div>`);
      _push(ssrRenderComponent(_component_MazTextarea, {
        modelValue: freelanceElement.value.description,
        "onUpdate:modelValue": ($event) => freelanceElement.value.description = $event,
        name: "Description",
        id: "Description",
        label: "Description"
      }, null, _parent));
      _push(`<div class="flex justify-between"><span>${ssrInterpolate(error.value.description)}</span><span class="dark:text-gray-300">${ssrInterpolate(freelanceElement.value.description.length)} /6000</span></div></div></div></form></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="md:grid md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Langue parler </h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-300"> Sélectionnez les langues dans lesquelles vous pouvez communiquer et votre niveau de compétence </p></div></div><div class="mt-5 md:mt-0 md:col-span-2"><div><div class="px-4 py-5 bg-white dark:bg-gray-800 dark:border dark:border-gray-200 rounded-lg sm:p-6 shadow {{ isset($actions) ? &#39;sm:rounded-tl-md sm:rounded-tr-md&#39; : &#39;sm:rounded-md&#39; }}"><div class=""><div><p class="mb-2 text-lg font-bold dark:text-gray-300">langues :</p><ul class="mb-4 dark:text-gray-300"><!--[-->`);
      ssrRenderList(langue.value, (educ, index) => {
        _push(`<li class="flex gap-2 px-2"><span>${ssrInterpolate(educ.langue)} - ${ssrInterpolate(educ.level)}</span><button class="btn btn-sm btn-circle btn-outline"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></li>`);
      });
      _push(`<!--]--></ul></div><div class="grid gap-2 mb-4 lg:grid-cols-3"><div class="w-full">`);
      _push(ssrRenderComponent(_component_MazSelect, {
        modelValue: selectedLangue.value.langue,
        "onUpdate:modelValue": ($event) => selectedLangue.value.langue = $event,
        options: languagesArray.value,
        "option-value-key": "name",
        "option-label-key": "name",
        "option-input-value-key": "name",
        label: "Niveau",
        search: ""
      }, null, _parent));
      _push(`</div><div class="w-full">`);
      _push(ssrRenderComponent(_component_MazSelect, {
        modelValue: selectedLangue.value.level,
        "onUpdate:modelValue": ($event) => selectedLangue.value.level = $event,
        options: levelSelector.value,
        "option-value-key": "id",
        "option-label-key": "name",
        "option-input-value-key": "name",
        label: "Niveau",
        search: ""
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: addLangue,
        label: "Ajouter",
        severity: "info",
        outlined: ""
      }, null, _parent));
      _push(`</div></div>`);
      if (error.value.langue) {
        _push(`<div class="text-sm text-red-600">${ssrInterpolate(error.value.langue)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></div><div class="px-6" style="${ssrRenderStyle(step.value === 3 ? null : { display: "none" })}"><div class="mb-4 md:grid md:mb-0 md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Votre Education <span class="text-sm italic"> (facultatif)</span></h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-300"> Ajoutez tous les détails de formation pertinents qui aideront les clients à mieux vous connaître. </p></div></div><div class="mt-5 md:mt-0 md:col-span-2"><div><div class="px-4 py-5 bg-white dark:bg-gray-800 dark:border dark:border-gray-200 rounded-lg sm:p-6 shadow {{ isset($actions) ? &#39;sm:rounded-tl-md sm:rounded-tr-md&#39; : &#39;sm:rounded-md&#39; }}"><div><div style="${ssrRenderStyle(education.value.length ? null : { display: "none" })}" class="flex flex-col mb-2"><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"><div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50 dark:bg-gray-900"><tr><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"> Diplomee En </th><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"> Universite </th><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"> Annee </th><th scope="col" class="relative px-6 py-3"></th></tr></thead><tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800"><!--[-->`);
      ssrRenderList(education.value, (educ, index) => {
        _push(`<tr><td class="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap">${ssrInterpolate(educ.diplome)}</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">${ssrInterpolate(educ.universite)}</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">${ssrInterpolate(educ.annee)}</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"><button class="btn btn-sm btn-circle btn-outline"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div><div class="grid gap-4 mt-4 lg:grid-cols-3 md:mb-2"><div>`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Diplomer en",
        modelValue: selectedEducation.value.diplome,
        "onUpdate:modelValue": ($event) => selectedEducation.value.diplome = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Etablissement",
        modelValue: selectedEducation.value.universite,
        "onUpdate:modelValue": ($event) => selectedEducation.value.universite = $event
      }, null, _parent));
      _push(`</div><div class="flex gap-2"><div>`);
      _push(ssrRenderComponent(_component_MazSelect, {
        label: "annee",
        options: anneeSelected.value,
        modelValue: selectedEducation.value.annee,
        "onUpdate:modelValue": ($event) => selectedEducation.value.annee = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: addEducation,
        label: "Ajouter",
        severity: "info",
        outlined: ""
      }, null, _parent));
      _push(`</div></div></div>`);
      if (error.value.education) {
        _push(`<div class="text-red-600">${ssrInterpolate(error.value.education)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="mb-4 md:grid md:mb-0 md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Certification<span class="text-sm italic"> (facultatif)</span></h3><p class="text-sm italic text-slate-800">facultatif</p><p class="mt-1 text-sm text-gray-600 dark:text-gray-300"> Ajoutez tous les détails de certification pertinents qui aideront les clients à mieux vous connaître. </p></div></div><div class="mt-5 md:mt-0 md:col-span-2"><div><div class="px-4 py-5 bg-white dark:bg-gray-800 dark:border dark:border-gray-200 rounded-lg sm:p-6 shadow {{ isset($actions) ? &#39;sm:rounded-tl-md sm:rounded-tr-md&#39; : &#39;sm:rounded-md&#39; }}"><div><div style="${ssrRenderStyle(certification.value.length ? null : { display: "none" })}" class="flex flex-col mb-2"><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"><div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50 dark:bg-gray-900"><tr><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-200"> Certificat </th><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-200"> Delivrer par </th><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-200"> Annee </th><th scope="col" class="relative px-6 py-3"></th></tr></thead><tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800"><!--[-->`);
      ssrRenderList(certification.value, (certif, index) => {
        _push(`<tr><td class="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap">${ssrInterpolate(certif.certifier)}</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap">${ssrInterpolate(certif.delivrer)}</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200whitespace-nowrap">${ssrInterpolate(certif.annee)}</td><td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"><button class="btn btn-sm btn-circle btn-outline"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div><div class="grid gap-4 mt-4 lg:grid-cols-3 md:mb-2"><div>`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Certifier en",
        modelValue: selectedCertificat.value.certifier,
        "onUpdate:modelValue": ($event) => selectedCertificat.value.certifier = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Delivrer par",
        modelValue: selectedCertificat.value.delivrer,
        "onUpdate:modelValue": ($event) => selectedCertificat.value.delivrer = $event
      }, null, _parent));
      _push(`</div><div class="flex gap-2"><div>`);
      _push(ssrRenderComponent(_component_MazSelect, {
        label: "annee",
        options: anneeSelected.value,
        modelValue: selectedCertificat.value.annee,
        "onUpdate:modelValue": ($event) => selectedCertificat.value.annee = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: addCertification,
        label: "Ajouter",
        severity: "info",
        outlined: ""
      }, null, _parent));
      _push(`</div></div></div>`);
      if (error.value.certification) {
        _push(`<div class="text-red-600">${ssrInterpolate(error.value.certification)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="mb-4 md:grid md:mb-0 md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Sites Web <span class="text-sm italic"> (facultatif)</span></h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-300"> Incluez un lien vers votre site Web personnel ou votre portfolio avec vos échantillons de travail. </p></div></div><div class="mt-5 md:mt-0 md:col-span-2"><div><div class="px-4 py-5 bg-white dark:bg-gray-800 dark:border dark:border-gray-200 rounded-lg sm:p-6 shadow {{ isset($actions) ? &#39;sm:rounded-tl-md sm:rounded-tr-md&#39; : &#39;sm:rounded-md&#39; }}"><div class="grid md:mb-2">`);
      _push(ssrRenderComponent(_component_MazInput, {
        modelValue: freelanceElement.value.portfolio,
        "onUpdate:modelValue": ($event) => freelanceElement.value.portfolio = $event,
        label: "Lien du portefolio",
        "left-icon": "globe-alt"
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`</div><div class="px-6 mx-auto my-auto" style="${ssrRenderStyle(step.value === 4 ? null : { display: "none" })}"><div class="mb-4 lg:grid lg:mb-0 lg:grid-cols-3 lg:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-xl font-medium text-gray-900 dark:text-gray-100"> Comptes Lies </h3><p class="my-4 text-sm text-gray-600 dark:text-gray-300"> Prendre le temps de vérifier et de lier vos comptes peut améliorer votre crédibilité et nous aider à vous offrir plus d&#39;affaires. Ne vous inquiétez pas, vos informations sont et resteront toujours privées..&quot; </p></div></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="mb-4 lg:grid lg:mb-0 lg:grid-cols-3 lg:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Votre Presence Professionnelle </h3><p class="mt-1 text-sm text-gray-600"> Rajouter de lien vers vos autres comptes Professionnelle </p></div></div><div class="mt-8 md:mt-0 md:col-span-2"><div><div class="px-4 py-5 bg-white dark:bg-gray-800 dark:border dark:border-gray-200 rounded-lg sm:p-6 shadow {{ isset($actions) ? &#39;sm:rounded-tl-md sm:rounded-tr-md&#39; : &#39;sm:rounded-md&#39; }}"><div class=""><div><p class="mb-2 text-lg font-bold dark:text-gray-300">Commptes lies :</p><ul class="mb-4"><!--[-->`);
      ssrRenderList(comptes.value, (copt, index) => {
        _push(`<li class="items-center gap-2 dark:text-gray-300"><span class="flex flex-wrap mr-1">${ssrInterpolate(copt.compte)} - ${ssrInterpolate(copt.lien)}</span><button class="btn btn-sm btn-circle btn-outline"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></li>`);
      });
      _push(`<!--]--></ul></div><div class="grid gap-2 mb-4 lg:grid-cols-3"><div>`);
      _push(ssrRenderComponent(_component_MazSelect, {
        label: "comptes",
        modelValue: selectedComptes.value.compte,
        "onUpdate:modelValue": ($event) => selectedComptes.value.compte = $event,
        options: comptesSelector.value,
        search: ""
      }, {
        default: withCtx(({ option, isSelected }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center" style="${ssrRenderStyle({ "width": "100%", "gap": "1rem" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazAvatar, {
              size: "0.8rem",
              src: option.picture
            }, null, _parent2, _scopeId));
            _push2(`<strong${_scopeId}>${ssrInterpolate(option.label)}</strong></div>`);
          } else {
            return [
              createVNode("div", {
                class: "flex items-center",
                style: { "width": "100%", "gap": "1rem" }
              }, [
                createVNode(_component_MazAvatar, {
                  size: "0.8rem",
                  src: option.picture
                }, null, 8, ["src"]),
                createVNode("strong", null, toDisplayString(option.label), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "lien",
        "left-icon": "globe-alt",
        modelValue: selectedComptes.value.lien,
        "onUpdate:modelValue": ($event) => selectedComptes.value.lien = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: addComptes,
        label: "Ajouter",
        severity: "info",
        outlined: ""
      }, null, _parent));
      _push(`</div></div>`);
      if (error.value.compte) {
        _push(`<div class="text-sm text-red-600">${ssrInterpolate(error.value.compte)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></div><div class="px-6" style="${ssrRenderStyle(step.value === 5 ? null : { display: "none" })}"><div class="mb-4 md:grid md:mb-0 md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-xl font-medium text-gray-900 dark:text-gray-100"> Securite Du Compte </h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-300"> La confiance et la sécurité sont importantes dans notre communauté.Veuillez vérifier votre adresse e - mail et votre numéro de téléphone afin que nous puissions sécuriser votre compte. </p></div></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="mb-4 md:grid md:mb-0 md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Votre Email </h3><p class="mt-1 text-sm text-gray-600"></p></div></div><div class="px-4 mt-5 md:mt-0 md:col-span-2"><div class="grid gap-4 mb-4 md:grid-cols-2">`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Email",
        modelValue: freelanceElement.value.email,
        "onUpdate:modelValue": ($event) => freelanceElement.value.email = $event,
        disabled: ""
      }, null, _parent));
      if (_ctx.$page.props.auth.user.email_verified_at != null) {
        _push(`<div class="flex gap-4 text-base italic text-gray-600"><span class="">Email verifier</span><span><i class="pi pi-check"></i></span></div>`);
      } else {
        _push(`<div class="flex justify-between text-base italic"><span>Email non verifier</span><div>`);
        _push(ssrRenderComponent(_component_Button, {
          severity: "success",
          outlined: "",
          label: "verifier",
          onClick: ($event) => verification(),
          loading: loadingVerifEmail.value
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(SectionBorder, null, null, _parent));
      _push(`<div class="mb-4 md:grid md:mb-0 md:grid-cols-3 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"> Votre Numero </h3><p class="mt-1 text-sm text-gray-600"></p></div></div><div class="mt-5 md:mt-0 md:col-span-2"><div class="grid gap-4 px-4 md:grid-cols-2">`);
      _push(ssrRenderComponent(_component_MazInput, {
        modelValue: freelanceElement.value.phone,
        "onUpdate:modelValue": ($event) => freelanceElement.value.phone = $event,
        disabled: ""
      }, null, _parent));
      if (_ctx.$page.props.auth.user.phone_verified_at != null) {
        _push(`<div class="flex gap-4 text-base italic text-gray-600"><span>telephone verifier</span><span><i class="pi pi-check"></i></span></div>`);
      } else {
        _push(`<div class="flex justify-between dark:text-gray-100"><span>verifier Telephone</span><div class="hidden">`);
        _push(ssrRenderComponent(_component_Button, {
          severity: "success",
          raised: "",
          size: "small",
          label: "verifier",
          onClick: ($event) => verification(),
          loading: loadingVerifEmail.value
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></div></div></div></div><div class="flex justify-between p-3 mt-auto"><div class="w-1/2"><button style="${ssrRenderStyle(step.value > 1 ? null : { display: "none" })}" class="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true"> Retour </button></div><div class="w-1/2 text-right"><button style="${ssrRenderStyle(step.value < 5 ? null : { display: "none" })}" class="middle none center rounded-lg bg-amber-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true"> Continuer </button>`);
      if (_ctx.$page.props.auth.user.email_verified_at !== null) {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": registerLoad.value }, "middle none center rounded-lg bg-green-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"])}"${ssrIncludeBooleanAttr(registerLoad.value) ? " disabled" : ""} style="${ssrRenderStyle(step.value == 5 ? null : { display: "none" })}" data-ripple-light="true"> S&#39;inscrire </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: verifier.value,
        "onUpdate:visible": ($event) => verifier.value = $event,
        position: "bottom",
        header: "VERIFICATION",
        style: { width: "30rem" },
        modal: true,
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div${_scopeId}><p class="my-2 text-lg text-gray-600 dark:text-gray-300"${_scopeId}>Veuillez vérifier vos e-mails, un code de vérification a été envoyé.</p></div><div class="px-4 pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazInputCode, {
              modelValue: unref(code).code,
              "onUpdate:modelValue": ($event) => unref(code).code = $event,
              codeLength: 6
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(code).errors.code
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex gap-2 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              label: "Verifier",
              icon: "pi pi-check",
              outlined: "",
              raised: "",
              severity: "success",
              loading: loadingVerif.value,
              onClick: validerMail
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", null, [
                  createVNode("p", { class: "my-2 text-lg text-gray-600 dark:text-gray-300" }, "Veuillez vérifier vos e-mails, un code de vérification a été envoyé.")
                ]),
                createVNode("div", { class: "px-4 pt-8" }, [
                  createVNode(_component_MazInputCode, {
                    modelValue: unref(code).code,
                    "onUpdate:modelValue": ($event) => unref(code).code = $event,
                    codeLength: 6
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    class: "mt-2",
                    message: unref(code).errors.code
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex gap-2 mt-4" }, [
                  createVNode(_component_Button, {
                    label: "Verifier",
                    icon: "pi pi-check",
                    outlined: "",
                    raised: "",
                    severity: "success",
                    loading: loadingVerif.value,
                    onClick: validerMail
                  }, null, 8, ["loading"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Registration/Registration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
