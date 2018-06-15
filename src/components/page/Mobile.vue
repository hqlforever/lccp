<template>
    <div>
        <div  class="mobileCon" >
            <div  id="port" class="container mobile">
                <div  data-depth="0.1" class="mobileSlide layer">
                    <div  class="animate">
                        <div  class="slideTxtBox">
                            <div  class="bd">
                                <ul >
                                    <li  class="ShowAuto"><img  src="//imagess-google.com/system/pc/mobile/1-home.png" alt=""></li>
                                    <li  class=""><img  src="//imagess-google.com/system/pc/mobile/2-activity.png" alt=""></li>
                                    <li  class=""><img  src="//imagess-google.com/system/pc/mobile/3-find.png" alt=""></li>
                                    <li  class=""><img  src="//imagess-google.com/system/pc/mobile/4-myaccount.png" alt=""></li>
                                    <li  class=""><img  src="//imagess-google.com/system/pc/mobile/5-grade.png" alt=""></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div  class="mobileText">
                    <h1 ><img  src="//imagess-google.com/system/App/App.png"></h1>
                    <h2 >m.cp.com</h2> <img  src="//imagess-google.com/system/pc/mobile/finger.png" alt="" class="cutFinger">
                    <div  id="android" class="android" title="http://180528.facloudfa.com/index.html?m.ascp00.com/AppDownload">
                        <canvas width="106" height="106" style="display: none;"></canvas><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqCAYAAABUIcSXAAAIxElEQVR4Xu1dWXbbMAyM73/o9NmNI5rCLABpx2nRn75WEhcMBhhAiy8fHx+fH8U/n59/L71cLre/539HwzrnjGNFY9znux+LxkRru18zj6HmRCaa9z6P7+5XQXC1cAP1ZaW7UZXRxuMvB8pd5OiJylvY8QobZwYh741YnvF0d18RYDPIjO3KIUZbfzOqgTrM9iuAimI3yj8qD0T5YHYIFTpGr8uwEDke2h/LUSgn7sqfDgtPjGqgzub/Z4BiSgp5y/z/TDmqUBTlLqUM3TEjpjHF6EQINXd0fAujGqhzaYJCPEojLMTfxNFdnldQXsk3SPFEuSVTp6lxnTCmzqnUYKtquYH6KtqZ1GbsQCUDCu3bGJXR9hkVpjxdzZsxpFPf7MprO5Qv2vvT6igVPqMFufVbA/XEFlKmB5dRfQ6T1Tk/ubZM9PgWas/s9f2kMRqowR3e2RjvvLYSoz4rSWKaKdPNcNolUZF5qyXA7RS2BdYymudRxaqTg11xkQXr0kAdd3l+FVAZdigPc3KUI9uVAR3vdIpz1XZiNZNirqN42RgnRjVQh0mRI7LuieM0CHAK1NxCYhW1mzvYYhU7GEvVrYvxOJrHMWTmWvfcqIWkCt2H/TRQZ3O5xo8EjjI+cvaooH8ACokJ5fnRhE7z1M1r0YadNc1hJZM7VKhjAKq1OcqU2QaqPjVxA/XoSspey0ChzsSG8upU94yhAtVT9/9ntxIcdYZUHstRqkh2lBvK8UyAOGuFj4s1ULnnFFVu2g6Ug66SlytjRIxyPT1SfWqto4HVuh1FitjOxIITIU6MUot1NrYyRgMVM7mBGjxPOdhbMGpneNkhYzMFYqbAzpQQTNggMbQyPlWG6OEWVVNECg6BrYq5qHBsoCb5jzoTTqHogMkkOavFolyoahV2DRIVGTZW8mdG7TEGw2fPG6jz/a+3AErJWKeyVkVsJgQyT5/X6vTmUO5gHl9hIWJFZp5oP7bqa6Ac1znOydRTjuPJF9kqkhRNzHKSM8/srewatXmnRYWcc+XaSDjNLmAxSslOJ2E3UEfRGvFQheoQqJ3PTKiCkQWPlWujcRUbIjaiNWTY7uQoJdTCfNZA/X1RfFdYfhpQ820OVRutFqKZWkilbyZw1LXbQpL4IsAu5kLV53R0K4ZqoM75y2k7NVADtUpJ/qcY5cbrMXSomkElTxWmdjSMmRJF8zsRQ0WeTAnB7GDf4XU64gpkBYgymAoRo2GRcziGQ/tgea1St6Xmuau+Va+PVBNSQOO5io3Xc9U5bO0OKxylFq3DcbyMtGf7/H4KqYFacwg3GoznqdrxIUIoRrF7TC64Tp+QzcOYqQw0H1eCgTGYtY4Uu5bLmgbqbGIlEBgrEGDLQKnn+lzWuJR2c4aTdzJrU4U8VVxfEjxK/hlQFeuWVF/GGI7qa6BqcMmvi1ViOpKqbIm71JGbkzL7yuTYOZ/uuraBCj4I8ixjrziRfDWUFZluxyDKX45HqyCRWZsaKzru7G/ldopKK6E8V2qFdYFVx6CBeqzR3O5IA2XS660Y5b5x6CRFc//0tMo8zjWu2hwLXtU5cEoSZ22zQSLGPVVMVIBb2Vg0XyUXomuc2q4iRFJAVSQ1mmBe7CpgO4rKHS0qJ0+v7hUx2r5x6CwgEyrUeA+JFHQGlGrKihg13o8CNT/com4pjJtXYSU6nhlfKdE5CmTWxlivHC4KzypcRo6XypsN1PEUEgLeca6XA+V6cTasoCTrGEHlPMczM/PMNnAKa7U/xigUclN1lDLS9biTqNVGWBhTa/gvgFJ1FJObiu5KMFRZWZHAKO9UckfEAOWs7H6UY0dZRzVQZ3f7UaBU6HEWl2GQStwZZRWFRtX+2RUuVX6pFMmRHeX7UY6MVfUHA9AJSW6oi8ILEgINVJJWDdRhMObw8JcEVHJkxaUjZ1Wx7IzvMNVJ1PM4KmxGIijpn9bpI3ANVGCyXwEUKvYcF3Divso3jmhZYTvbn7t+JydHfcFZQGWEiJTnzqKUYgxVzPQWREa0/NdAqThdAcNhIWrtMAWHxq3cy4rGQuM4UpvlZ2RjFWWux+XbHCs9sgbq/Dw7EyJMYMmnkJyQhM5hcVqBmGEHK453RIKKiq2kDCrP3ZetWZJvoHK/7u2mmYcSRX20amfivsVa8fsaEf1d73RYuGM/K04b2UBFl4ccpToEToFaOUcBN25MbeifBmp+7cYF7Go05Z0Zz3NqGMUsZwwGthJOGUd0a6bIjlFePb1x2EAdUCpbsPqwgSKUaEYNxnHygMolTpEZFbwVdVkBT4VAZ39O4ZthrB36nHpE5RC2QbToMYY3UIFsno1aASEqeFUR7DBWjZFlLHKgjMcrlmXsF+1PMgp5sVoYUjPKyA0U+EC9+1a8o3CQ0qnkicx8mbDsOEJmHyqfOZLeIYP8IEhmY5kNOozMhl9nrc45mX28DCj1+QLHWJVwpjoSTPU5HqgcgTVy1X7GsTPnumsK22gN1GE+R1LPxn4ZUG73nHkDoj9TOhlFheK8E/+V8Z38ycKbUnNOqLXW0EAdP5iMnPEtgEKhT8XTqBB1NopChRNCFAujvKbYGOWbOQfOa7MYQL6MqWwQ5WD5gXoGmLPg6/XMgEhhRfM2UA59gnMaKGw4lhuXGLVidCfkqdrk2XkAFcUZtjv+rOqqcQwlhsax5HN9rI5S4EaKCMX7BursBhQoJDcjuioKK+nK8pADsuPh6hxHPqsxImGV2bsjVuCz505h10AdVkJCJwMyC4VPAYopOSXDGXOVbGZSe0cejWSzG/5Zy0rl75tyRj9GucKoBuqwHmWJ+NDJCO5LgHKUTqbdFHm2E2KyuUSxn83phEKXjS9jVAMVP4O+BJTyTHb7IdOuQfNUvJhdo4wRrQMVqyzPoHkc9epcu7WOaqB4LeSIhij6PIQ+xaTouPIER8EhJcc8fedad4XlSkcis4+nNGWdPte8SNVOuXnVpJIyG3VCYCUiqFpyl8M1UIMl3xmoPxwuLlgnYwBDAAAAAElFTkSuQmCC" style="display: block;"></div>
                </div>
                <div  class="dontTouch"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
</style>
