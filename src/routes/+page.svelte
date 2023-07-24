<script>
        /** @type {import('./$types').PageData} */
        export let data;
    /** @type {import('./$types').ActionData} */
    export let form;
//on mount
import {onMount} from 'svelte'
onMount(async () => {
    if (form) {
        // Set the id field to form.id
        document.getElementById("id").value = form.id;
        // Disable it
        document.getElementById("id").readonly = true;
        // Get the modal
        var modal = document.getElementById("info");
        // Set it to active
        modal.classList.add("active");
        // After 1 second
        setTimeout(() => {
            // Set the button to 4
            document.getElementById("close").innerHTML = "4";
            // After 1 second
            setTimeout(() => {
                // Set the button to 3
                document.getElementById("close").innerHTML = "3";
                // After 1 second
                setTimeout(() => {
                    // Set the button to 2
                    document.getElementById("close").innerHTML = "2";
                    // After 1 second
                    setTimeout(() => {
                        // Set the button to 1
                        document.getElementById("close").innerHTML = "1";
                        // After 1 second
                        setTimeout(() => {
                            // Enable the button
                            document.getElementById("close").disabled = false;
                            // Make it say close
                            document.getElementById("close").innerHTML = "Close";
                            // When the button is clicked
                            document.getElementById("close").onclick = () => {
                                // Close the modal
                                modal.classList.remove("active");
                            }
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
})
</script>

<h1>UNOFFICIAL GCPS Schedule Checker</h1>
<p>Made with ❤ by Kat(kattschan on GitHub)</p>
<form method="POST">

<div class="field label border">
    <input id="id" type="number" name="id">
    <label>Student ID</label>
  </div>
  {#if !form}
<div class="field label border">
    <input id="password" type="password" name="password">
    <label>Password</label>
  </div>
<button type="submit">Submit</button>

{/if}
</form>
{#if form}
<dialog id="info" class="max">
    <h5>Information</h5>
    <div>While we try to fetch your class data, here's some information:</div>
    <ul class="padding">
        <li>All data is sent directly to the county and back to your browser, so we are not responsible for what data is returned.</li>
        <li>Some schools are still showing Gradebook disabled and errors on schedules. Please try again if this applies to you.</li>
        <li>Exciting things are coming related to StudentVue in 2023. <a href="https://discord.gg/AQkh5DPU">Click here</a> to stay up to date</li>
        <li>We are not responsible for how you use the information this tool provides.</li>
        <li>Adhere to GCPS and local school policies when using this tool.</li>
        <li>Do not share the error IDs with anyone as they may provide access to your account.</li>
        <li>If you have concerns about the security of your credentials, you can view the source code by <a href="https://github.com/kattschan/schedulecheckergcps">clicking here.</a></li>
    </ul>
    <nav class="right-align">
      <button id="close" disabled>5</button>
    </nav>
  </dialog>
<div class="field textarea border">
    <textarea id="schedule" cols="30" rows="10" readonly="true">{form.schedule}</textarea>
    <label>Schedule</label>
    </div>
<div class="field textarea border">
    <textarea id="gradebook" cols="30" rows="10" readonly="true">{form.grades}</textarea>
    <label>Gradebook</label>
    </div>
{/if}


<style>
    input {
        display: block;
    }
</style>