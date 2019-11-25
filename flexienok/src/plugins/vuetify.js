import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#db0000',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                darkness: '##1c1c1c'
            }
        }
    }
});