<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">EcoFresh Dry Cleaner</div>
        <div class="coming-soon-badge">Coming Soon</div>
      </div>
    </div>
  </header>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
.header {
  background: var(--bg-primary);
  box-shadow: 0 2px 10px var(--shadow-light);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.coming-soon-badge {
  background: var(--gradient-eco);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 15px var(--shadow-eco);
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .coming-soon-badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
