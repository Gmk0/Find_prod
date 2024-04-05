<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Example 1</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="style.css" media="all" />

    <style>
        .clearfix:after {
            content: "";
            display: table;
            clear: both;
        }

        a {
            color: #5D6975;
            text-decoration: underline;
        }

        body {
            position: relative;

            height: 29.7cm;
            margin: 0;
            color: #001028;
            background: #FFFFFF;
            font-family: Arial, sans-serif;
            font-size: 12px;
            font-family: Arial;
        }

        header {
            padding: 10px 0;
            margin-bottom: 30px;
        }

        #logo {
            text-align: center;
            margin-bottom: 10px;
        }

        #logo img {
            width: 90px;
        }

        h1 {
            border-top: 1px solid #5D6975;
            border-bottom: 1px solid #5D6975;
            color: #5D6975;
            font-size: 2.4em;
            line-height: 1.4em;
            font-weight: normal;
            text-align: center;
            margin: 0 0 20px 0;
            background: url(dimension.png);
        }

        #project {
            float: left;
        }

        #project span {
            color: #5D6975;
            text-align: right;
            width: 52px;
            margin-right: 10px;
            display: inline-block;
            font-size: 0.8em;
        }

        #company {
            float: right;
            text-align: right;
        }

        #project div,
        #company div {
            white-space: nowrap;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            margin-bottom: 20px;
        }

        table tr:nth-child(2n-1) td {
            background: #F5F5F5;
        }

        table th,
        table td {
            text-align: center;
        }

        table th {
            padding: 5px 20px;
            color: #5D6975;
            border-bottom: 1px solid #C1CED9;
            white-space: nowrap;
            font-weight: normal;
        }

        table .service,
        table .desc {
            text-align: left;
        }

        table td {
            padding: 20px;
            text-align: right;
        }

        table td.service,
        table td.desc {
            vertical-align: top;
        }

        table td.unit,
        table td.qty,
        table td.total {
            font-size: 1.2em;
        }

        table td.grand {
            border-top: 1px solid #5D6975;
            ;
        }

        #notices .notice {
            color: #5D6975;
            font-size: 1.2em;
        }

        footer {
            color: #5D6975;
            width: 100%;
            height: 30px;
            position: absolute;
            bottom: 0;
            border-top: 1px solid #C1CED9;
            padding: 8px 0;
            text-align: center;
        }
    </style>
</head>

<body>
    <header class="clearfix">
        <div id="logo">

            <H1><img class="w-24" src="{{public_path('images/logo/find_02.png')}}"
                    style="height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; width: 96px; border-style: none; border-width: 0;"
                    width="96"></H1>
        </div>
        <h1>Facture {{$transaction->transaction_numero}}</h1>
        <div id="company" class="clearfix">
            <div>FIND</div>
            <div>63,avenue Colonel Mondjiba,<br />Kinshasa-RDC</div>
            <div>(243)844720350 </div>
            <div><a href="mailto:support@find-freelance.com">support@find-freelance.com</a></div>
        </div>
        <div id="project">

            <div><span>CLIENT</span>{{$transaction->user->name}} </div>

            <div><span>EMAIL</span> <a href="mailto:{{$transaction->user->email}}">{{$transaction->user->email}}</a></div>
            <div><span>DATE</span> {{$transaction->created_at}}</div>
            <div><span>DUE DATE</span> {{$transaction->created_at}}</div>
        </div>
    </header>
    <main>
        <table>
            <thead>
                <tr>
                    <th class="service">SERVICE</th>
                    <th class="desc">DESCRIPTION</th>
                    <th>Prix</th>
                    <th>QTY</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>


                @empty(!$transaction->orders)
                @forelse ($transaction->orders as $item )
                <tr>
                    <td class="service">{{$item->service->title}}</td>
                    <td class="desc">{{$item->service->category->name}}</td>
                    <td class="unit">${{$item->service->basic_price}}</td>
                    <td class="qty">{{$item->quantity}}</td>
                    <td class="total">${{$item->total_amount}}</td>
                </tr>
                @empty
                @endforelse
                @endempty

                @empty(!$transaction->mission)
                <tr>
                    <td class="service">{{$transaction->mission->title}}</td>
                    <td class="desc">{{$transaction->mission->title}}</td>
                    <td class="unit">${{$transaction->mission->budget}}</td>
                    <td class="qty">1</td>
                    <td class="total">${{$transaction->mission->budget}}</td>
                </tr>

                @endempty

                <tr>
                    <td colspan="4">SUBTOTAL</td>
                    <td class="total">{{$transaction->amount}}</td>
                </tr>

                <tr>
                    <td colspan="4" class="grand total">GRAND TOTAL</td>
                    <td class="grand total">${{$transaction->amount}}</td>
                </tr>
            </tbody>
        </table>

    </main>
    <footer>
        Invoice was created on a computer and is valid without the signature and seal.
    </footer>


</body>

</html>
