import StudentVue from 'studentvue.js';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id');
        const password = data.get('password');
        const client = await StudentVue.login('https://ga-gcps-psv.edupoint.com', id, password);
        const grades = await client.getGradebook();
        const schedule = await client.getSchedule();
        const sandwich = true;
        return { grades, schedule, id };
    }
};