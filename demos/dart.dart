import 'package:flutter/material.dart';

class EntryItem {
	final int id;
	final String title;

	const EntryItem({required this.id, required this.title});
}

class HomePage extends StatelessWidget {
  const HomePage({Key? key, required this.title}) : super(key: key);

	final String title;


  @override
  Widget build(BuildContext context) {
			final item =  EntryItem(id: 1, title: title);
      return Scaffold(
        appBar: const NavBar(),
        body: SingleChildScrollView(
          padding: EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(title, style: Theme.of(context).textTheme.headline1)
            ],
          ),
        ),
      );
    });
  }
}
