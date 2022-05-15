<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__title">
          <Title variant="primary">A Big Title</Title>
        </div>

        <div class="header__right">
          <div class="header__search">
            <Search />
          </div>
          <div class="header__nav">
            <Nav />
          </div>
        </div>

        <div class="header__burger">
          <!-- could be separate component in real project -->
          <div class="burger">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>
