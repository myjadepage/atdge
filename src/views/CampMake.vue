<template>
  <div class="container-fluid">
    <!-- Begin Page Header-->
    <div class="row">
      <div class="page-header">
        <div class="d-flex align-items-center">
          <h2 class="page-header-title">캠페인 만들기</h2>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html"><i class="ti ti-home"></i></a>
            </li>
            <li class="breadcrumb-item"><a href="#">캠페인 생성</a></li>
            <li class="breadcrumb-item active">캠페인 만들기</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End Page Header -->

    <div class="row flex-row">
      <div class="col-lg-3 col-md-6">
        <div class="widget">
          <div class="widget-body">
            <div class="section-title mb-5">
              <h4>내 구글광고계정 연결하기</h4>
            </div>
            <div class="d-flex">
              <p class="mr-2">
                내 구글광고계정 연결하여 광고 집행이 가능합니다.
              </p>
              <button
                type="button"
                class="flex-shrink-0 btn btn-sm btn-square btn-primary"
              >
                연결하기
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="widget">
          <div class="widget-body">
            <div class="section-title mb-5">
              <h4>내 구글애널리틱스 연결하기</h4>
            </div>
            <div class="d-flex">
              <p class="mr-2">
                광고전환율, 이탈율 등 방문자 행동 분석이 가능합니다. 구글광고
                리타게팅에 반드시 필요합니다.
              </p>
              <button
                type="button"
                class="flex-shrink-0 btn btn-sm btn-square btn-primary"
              >
                연결하기
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="widget">
          <div class="widget-body">
            <div class="section-title mb-5">
              <h4>내 페이스북 페이지 연결하기</h4>
            </div>
            <div class="d-flex">
              <p class="mr-2">
                광고주님의 사업 프로필로 페이스북 및 인스타그램 광고 집행을 위해
                반드시 필요합니다.
              </p>
              <button
                type="button"
                class="flex-shrink-0 btn btn-sm btn-square btn-primary"
                data-toggle="modal"
                data-target="#modal-adSelect"
              >
                연결하기
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="widget">
          <div class="widget-body">
            <div class="section-title mb-5">
              <h4>내 픽셀 연결하기</h4>
            </div>
            <div class="d-flex">
              <p class="mr-2">
                페이스북과 인스타그램 광고 전환을 확인, 개선 및 유사고객
                리타게팅에 반드시 필요합니다.
              </p>
              <button
                type="button"
                class="flex-shrink-0 btn btn-sm btn-square btn-primary"
              >
                연결하기
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="section-title mt-5 mb-3">
          <h4>연결된 데이터</h4>
        </div>
        <div class="widget">
          <div class="widget-header">
            <span>페이스북 페이지</span>
          </div>
          <div class="widget-body">
            <ul>
              <li class="d-flex bordered">
                <p>
                  <span class="badge-rounded gray mr-3"></span> Punkyade |
                  1213141343145
                </p>
                <div class="d-flex flex-fill justify-content-end">
                  <button type="button" class="btn btn-secondary">
                    연결하기
                  </button>
                </div>
              </li>
              <li class="em-separator separator-solid"></li>
              <li class="d-flex">
                <p>
                  <span class="badge-rounded info mr-3"></span> Sns클럭 |
                  5463543543
                </p>
                <div class="d-flex flex-fill justify-content-end">
                  <button type="button" class="btn btn-primary">
                    연결끊기
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row flex-row justify-content-center">
      <div class="col-lg-2">
        <button
          type="button"
          class="btn btn-square btn-primary"
          onclick="location.href='camp_new.html'"
        >
          다음
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
