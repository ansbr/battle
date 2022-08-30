<script lang="ts">
  import { onMount } from 'svelte'

  let paid = {
    history: [],
    statistics: {
      total_trades_volume: "",
      total_number_of_trades: 0,
      top_trade: ""
    }
  }

  onMount(async () => {
    const response = await fetch('/api?url=/rest/paid?limit=10');
    paid = await response.json();
  })

  function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(str: string) {
    let datenum = Date.parse(str)
    let date = new Date(datenum) as Date
    return (
      [
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
        date.getFullYear(),
      ].join('/') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }

</script>

<style>
  .list-item {
    background: rgba(200, 200, 200, 0.2);
    border-radius: 15px;
    padding: 30px 10px;
    margin: 0 0 25px 0;
  }
</style>

<h1 class="text-center">Latest sales</h1>

<section class="sales">

  <div class="row py-5 text-center">
    <div class="col-12 col-md-4">
      <div class="list-item">
        <div class="fs-6 pb-2">Total sale volume</div>
        <h3>
          <span>
            <svg class="near-icon" style="width: 21px;" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.43596 24.75C3.82197 24.75 4.20343 24.665 4.55434 24.5007C4.90525 24.3365 5.21735 24.0969 5.46937 23.7983L23.8385 2.03667C23.5975 1.64261 23.2621 1.31771 22.8641 1.09261C22.4661 0.867504 22.0186 0.749598 21.5636 0.750001C21.1797 0.750066 20.8004 0.834149 20.451 0.996586C20.1017 1.15902 19.7905 1.39604 19.5384 1.69167L1.07617 23.325C1.30799 23.757 1.64944 24.1173 2.06467 24.3681C2.4799 24.6188 2.95358 24.7507 3.43596 24.75V24.75Z" fill="url(#paint0_linear_3551:766)" />
              <path d="M3.49333 24.75C3.93054 24.7499 4.3614 24.6453 4.75 24.445V6.27835L19.325 23.7683C19.5827 24.0764 19.905 24.324 20.2691 24.4936C20.6331 24.6632 21.03 24.7508 21.4317 24.75H22.0067C22.7342 24.75 23.432 24.461 23.9465 23.9465C24.461 23.432 24.75 22.7342 24.75 22.0067V3.49335C24.75 2.76577 24.461 2.068 23.9465 1.55352C23.432 1.03905 22.7342 0.750018 22.0067 0.750018C21.5697 0.748415 21.1387 0.851876 20.75 1.05168V19.2267L6.175 1.73668C5.91774 1.42774 5.59565 1.1792 5.23158 1.00868C4.8675 0.838168 4.47036 0.749857 4.06833 0.750018H3.49333C2.76576 0.750018 2.06798 1.03905 1.5535 1.55352C1.03903 2.068 0.75 2.76577 0.75 3.49335V22.0067C0.75 22.7342 1.03903 23.432 1.5535 23.9465C2.06798 24.461 2.76576 24.75 3.49333 24.75V24.75Z" fill="currentColor" />
              <defs>
                <linearGradient id="paint0_linear_3551:766" x1="1.53475" y1="23.945" x2="23.9215" y2="2.02301" gradientUnits="userSpaceOnUse">
                  <stop offset="0.21" stop-color="currentColor" />
                  <stop offset="0.42" stop-color="currentColor" stop-opacity="0" />
                  <stop offset="0.59" stop-color="currentColor" stop-opacity="0" />
                  <stop offset="0.81" stop-color="currentColor" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          {paid.statistics?.total_trades_volume}
        </h3>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="list-item">
        <div class="fs-6 pb-2">Total number of sales</div>
        <h3>
          {paid.statistics?.total_number_of_trades}
        </h3>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="list-item">
        <div class="fs-6 pb-2">Top sale</div>
        <h3>
          <span>
            <svg class="near-icon" style="width: 21px;" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.43596 24.75C3.82197 24.75 4.20343 24.665 4.55434 24.5007C4.90525 24.3365 5.21735 24.0969 5.46937 23.7983L23.8385 2.03667C23.5975 1.64261 23.2621 1.31771 22.8641 1.09261C22.4661 0.867504 22.0186 0.749598 21.5636 0.750001C21.1797 0.750066 20.8004 0.834149 20.451 0.996586C20.1017 1.15902 19.7905 1.39604 19.5384 1.69167L1.07617 23.325C1.30799 23.757 1.64944 24.1173 2.06467 24.3681C2.4799 24.6188 2.95358 24.7507 3.43596 24.75V24.75Z" fill="url(#paint0_linear_3551:766)" />
              <path d="M3.49333 24.75C3.93054 24.7499 4.3614 24.6453 4.75 24.445V6.27835L19.325 23.7683C19.5827 24.0764 19.905 24.324 20.2691 24.4936C20.6331 24.6632 21.03 24.7508 21.4317 24.75H22.0067C22.7342 24.75 23.432 24.461 23.9465 23.9465C24.461 23.432 24.75 22.7342 24.75 22.0067V3.49335C24.75 2.76577 24.461 2.068 23.9465 1.55352C23.432 1.03905 22.7342 0.750018 22.0067 0.750018C21.5697 0.748415 21.1387 0.851876 20.75 1.05168V19.2267L6.175 1.73668C5.91774 1.42774 5.59565 1.1792 5.23158 1.00868C4.8675 0.838168 4.47036 0.749857 4.06833 0.750018H3.49333C2.76576 0.750018 2.06798 1.03905 1.5535 1.55352C1.03903 2.068 0.75 2.76577 0.75 3.49335V22.0067C0.75 22.7342 1.03903 23.432 1.5535 23.9465C2.06798 24.461 2.76576 24.75 3.49333 24.75V24.75Z" fill="currentColor" />
              <defs>
                <linearGradient id="paint0_linear_3551:766" x1="1.53475" y1="23.945" x2="23.9215" y2="2.02301" gradientUnits="userSpaceOnUse">
                  <stop offset="0.21" stop-color="currentColor" />
                  <stop offset="0.42" stop-color="currentColor" stop-opacity="0" />
                  <stop offset="0.59" stop-color="currentColor" stop-opacity="0" />
                  <stop offset="0.81" stop-color="currentColor" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          {paid.statistics?.top_trade}
        </h3>
      </div>
    </div>
  </div>

</section>