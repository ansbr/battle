<script lang="ts">
  import { onMount } from 'svelte'
  const countDownDate = new Date("Sep 12, 2022 12:00:00").getTime();
  const now = new Date().getTime();
  const timeleft = countDownDate - now;
      

  let days: string = ''
  let hours: string = ''
  let minutes: string = ''
  let seconds: string = ''
  
  const updateTimer = () => {
    const now = new Date().getTime();
    const timeleft = countDownDate - now;
    
    days = Math.floor(timeleft / (1000 * 60 * 60 * 24)) + '';
    if (days.length < 2) days = '0' + days
    hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + '';
    if (hours.length < 2) hours = '0' + hours
    minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)) + '';
    if (minutes.length < 2) minutes = '0' + minutes
    seconds = Math.floor((timeleft % (1000 * 60)) / 1000) + '';
    if (seconds.length < 2) seconds = '0' + seconds
  }
  
  updateTimer()
  onMount(() => {
    setInterval(updateTimer, 1000);
  })
</script>


<style>
  .countdown {
    font-family: var(--bs-font-sans-serif);
    text-align: center;
    font-size: 24px;
    line-height: 21px;
    font-weight: 700;
    float: right;
    color: #f0f0f0;
    text-decoration: none;
    padding: 10px 8px;
    border: 1px solid #fff;
    border-radius: 10px;
    height: 45.25px;
    width: 15vw;
    max-width: 198px;
    min-width: 156px;
    display: block;
    transition: all 0.5s;
  }
  .countdown:hover, .countdown:focus, .countdown:visited {
    color: #f0f0f0;
    text-decoration: none;
  }
</style>

<a class="countdown" href={""}>
  {days}:{hours}:{minutes}:{seconds}
</a>