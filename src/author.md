<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/26873765',
    name: 'Max Foxie',
    title: 'altfoxie',
    links: [
      { icon: 'github', link: 'https://github.com/altfoxie' },
    ]
  },
]
</script>

# Автор

<VPTeamMembers size="small" :members="members" />

Сайт и лого сделал [@glebgorokhov](https://github.com/glebgorokhov)
