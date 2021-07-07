<div class="container">
  <h2 class="title"><slot name="title">Section</slot></h2>
  <div class="content"><slot /></div>
</div>

<style>
  .container {
    margin: 0 0.25rem;
  }
  .title {
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .content {
    margin: 0;
  }
</style>
