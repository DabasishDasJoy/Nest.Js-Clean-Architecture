'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRedisModule.html" data-type="entity-link" >AppRedisModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppRedisModule-e3d5750bdb65f5efae008b262ab738aef41d9568bed98343f5ee5afca623e956113684c57119c985823d018eaa0b8802fbd9bb81b64719001b92ebadb435cf8c"' : 'data-bs-target="#xs-injectables-links-module-AppRedisModule-e3d5750bdb65f5efae008b262ab738aef41d9568bed98343f5ee5afca623e956113684c57119c985823d018eaa0b8802fbd9bb81b64719001b92ebadb435cf8c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppRedisModule-e3d5750bdb65f5efae008b262ab738aef41d9568bed98343f5ee5afca623e956113684c57119c985823d018eaa0b8802fbd9bb81b64719001b92ebadb435cf8c"' :
                                        'id="xs-injectables-links-module-AppRedisModule-e3d5750bdb65f5efae008b262ab738aef41d9568bed98343f5ee5afca623e956113684c57119c985823d018eaa0b8802fbd9bb81b64719001b92ebadb435cf8c"' }>
                                        <li class="link">
                                            <a href="injectables/RedisService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RedisService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-f2c26905440ae426f8f9a32d69877ddd9b37b11ba2024541d0a3a62fcae7218c679c5bb442798e633c2e9b62d900a68472ed4e90d1e77ec5ff8a35fdb8dbcf42"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-f2c26905440ae426f8f9a32d69877ddd9b37b11ba2024541d0a3a62fcae7218c679c5bb442798e633c2e9b62d900a68472ed4e90d1e77ec5ff8a35fdb8dbcf42"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-f2c26905440ae426f8f9a32d69877ddd9b37b11ba2024541d0a3a62fcae7218c679c5bb442798e633c2e9b62d900a68472ed4e90d1e77ec5ff8a35fdb8dbcf42"' :
                                            'id="xs-controllers-links-module-AuthModule-f2c26905440ae426f8f9a32d69877ddd9b37b11ba2024541d0a3a62fcae7218c679c5bb442798e633c2e9b62d900a68472ed4e90d1e77ec5ff8a35fdb8dbcf42"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-f2c26905440ae426f8f9a32d69877ddd9b37b11ba2024541d0a3a62fcae7218c679c5bb442798e633c2e9b62d900a68472ed4e90d1e77ec5ff8a35fdb8dbcf42"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-f2c26905440ae426f8f9a32d69877ddd9b37b11ba2024541d0a3a62fcae7218c679c5bb442798e633c2e9b62d900a68472ed4e90d1e77ec5ff8a35fdb8dbcf42"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-f2c26905440ae426f8f9a32d69877ddd9b37b11ba2024541d0a3a62fcae7218c679c5bb442798e633c2e9b62d900a68472ed4e90d1e77ec5ff8a35fdb8dbcf42"' :
                                        'id="xs-injectables-links-module-AuthModule-f2c26905440ae426f8f9a32d69877ddd9b37b11ba2024541d0a3a62fcae7218c679c5bb442798e633c2e9b62d900a68472ed4e90d1e77ec5ff8a35fdb8dbcf42"' }>
                                        <li class="link">
                                            <a href="injectables/LogoutService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link" >BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BlogModule-e8935e2cb45ba45225ef74745f73d23151499b12356d76095089f70190ff0bcf22cb7d7345c70eaae0ed02439f2a6e3f8882be74aca30bfeb94f94e14264961a"' : 'data-bs-target="#xs-controllers-links-module-BlogModule-e8935e2cb45ba45225ef74745f73d23151499b12356d76095089f70190ff0bcf22cb7d7345c70eaae0ed02439f2a6e3f8882be74aca30bfeb94f94e14264961a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BlogModule-e8935e2cb45ba45225ef74745f73d23151499b12356d76095089f70190ff0bcf22cb7d7345c70eaae0ed02439f2a6e3f8882be74aca30bfeb94f94e14264961a"' :
                                            'id="xs-controllers-links-module-BlogModule-e8935e2cb45ba45225ef74745f73d23151499b12356d76095089f70190ff0bcf22cb7d7345c70eaae0ed02439f2a6e3f8882be74aca30bfeb94f94e14264961a"' }>
                                            <li class="link">
                                                <a href="controllers/BlogController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BloomFilterModule.html" data-type="entity-link" >BloomFilterModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BloomFilterModule-03545404311e3f9ed2f2afb8629a223ab3858e3ac124deee6dff8754bd0f97391227115504ac02c7e00c5131ae041cad1e9fcb37acc3b8397c9fd96cb337f00f"' : 'data-bs-target="#xs-injectables-links-module-BloomFilterModule-03545404311e3f9ed2f2afb8629a223ab3858e3ac124deee6dff8754bd0f97391227115504ac02c7e00c5131ae041cad1e9fcb37acc3b8397c9fd96cb337f00f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BloomFilterModule-03545404311e3f9ed2f2afb8629a223ab3858e3ac124deee6dff8754bd0f97391227115504ac02c7e00c5131ae041cad1e9fcb37acc3b8397c9fd96cb337f00f"' :
                                        'id="xs-injectables-links-module-BloomFilterModule-03545404311e3f9ed2f2afb8629a223ab3858e3ac124deee6dff8754bd0f97391227115504ac02c7e00c5131ae041cad1e9fcb37acc3b8397c9fd96cb337f00f"' }>
                                        <li class="link">
                                            <a href="injectables/BloomFilterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BloomFilterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommentingModule.html" data-type="entity-link" >CommentingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigModule.html" data-type="entity-link" >ConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabaseModule-c45aa8de35476b2e2f514e85afd68462e18923a772a987a77914852d7f59d34ce3a4a6c201243a3bc673cb408c3bdd308d35ee0034ea77104f788872e0ef20cd"' : 'data-bs-target="#xs-injectables-links-module-DatabaseModule-c45aa8de35476b2e2f514e85afd68462e18923a772a987a77914852d7f59d34ce3a4a6c201243a3bc673cb408c3bdd308d35ee0034ea77104f788872e0ef20cd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-c45aa8de35476b2e2f514e85afd68462e18923a772a987a77914852d7f59d34ce3a4a6c201243a3bc673cb408c3bdd308d35ee0034ea77104f788872e0ef20cd"' :
                                        'id="xs-injectables-links-module-DatabaseModule-c45aa8de35476b2e2f514e85afd68462e18923a772a987a77914852d7f59d34ce3a4a6c201243a3bc673cb408c3bdd308d35ee0034ea77104f788872e0ef20cd"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DraftingModule.html" data-type="entity-link" >DraftingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HashingModule.html" data-type="entity-link" >HashingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublishingModule.html" data-type="entity-link" >PublishingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SwaggerModule.html" data-type="entity-link" >SwaggerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-08201497be3d4a658bcf232da595147e9f894bb27f8ebdd2ac54a14d3cb308418348c0a0480516ad54135595571243bec5912d345ee4e94fdbe0eede01c72df1"' : 'data-bs-target="#xs-controllers-links-module-UserModule-08201497be3d4a658bcf232da595147e9f894bb27f8ebdd2ac54a14d3cb308418348c0a0480516ad54135595571243bec5912d345ee4e94fdbe0eede01c72df1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-08201497be3d4a658bcf232da595147e9f894bb27f8ebdd2ac54a14d3cb308418348c0a0480516ad54135595571243bec5912d345ee4e94fdbe0eede01c72df1"' :
                                            'id="xs-controllers-links-module-UserModule-08201497be3d4a658bcf232da595147e9f894bb27f8ebdd2ac54a14d3cb308418348c0a0480516ad54135595571243bec5912d345ee4e94fdbe0eede01c72df1"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-08201497be3d4a658bcf232da595147e9f894bb27f8ebdd2ac54a14d3cb308418348c0a0480516ad54135595571243bec5912d345ee4e94fdbe0eede01c72df1"' : 'data-bs-target="#xs-injectables-links-module-UserModule-08201497be3d4a658bcf232da595147e9f894bb27f8ebdd2ac54a14d3cb308418348c0a0480516ad54135595571243bec5912d345ee4e94fdbe0eede01c72df1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-08201497be3d4a658bcf232da595147e9f894bb27f8ebdd2ac54a14d3cb308418348c0a0480516ad54135595571243bec5912d345ee4e94fdbe0eede01c72df1"' :
                                        'id="xs-injectables-links-module-UserModule-08201497be3d4a658bcf232da595147e9f894bb27f8ebdd2ac54a14d3cb308418348c0a0480516ad54135595571243bec5912d345ee4e94fdbe0eede01c72df1"' }>
                                        <li class="link">
                                            <a href="injectables/CreatingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EditingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RemovingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemovingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidUserDataException.html" data-type="entity-link" >InvalidUserDataException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ObjectUtils.html" data-type="entity-link" >ObjectUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseDto.html" data-type="entity-link" >ResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAlreadyExistsException.html" data-type="entity-link" >UserAlreadyExistsException</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserNotFoundException.html" data-type="entity-link" >UserNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserResponseDto.html" data-type="entity-link" >UserResponseDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingService.html" data-type="entity-link" >HashingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegisterService.html" data-type="entity-link" >RegisterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShowingService.html" data-type="entity-link" >ShowingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRepository.html" data-type="entity-link" >UserRepository</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IDatabaseConfig.html" data-type="entity-link" >IDatabaseConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHashingService.html" data-type="entity-link" >IHashingService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoginService.html" data-type="entity-link" >ILoginService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRedisConfig.html" data-type="entity-link" >IRedisConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRegisterServiceV1.html" data-type="entity-link" >IRegisterServiceV1</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRegisterServiceV2.html" data-type="entity-link" >IRegisterServiceV2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IServerConfig.html" data-type="entity-link" >IServerConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserRepository.html" data-type="entity-link" >IUserRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserShowingService.html" data-type="entity-link" >IUserShowingService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});